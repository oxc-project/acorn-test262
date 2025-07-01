__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 26
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 27,
            "end": 28
          }
        ],
        "start": 26,
        "end": 29
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "watch",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 41
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 49
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 50,
                      "end": 56
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WatchHandler",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 58,
                        "end": 70
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 71,
                            "end": 74
                          }
                        ],
                        "start": 70,
                        "end": 75
                      },
                      "start": 58,
                      "end": 75
                    }
                  ],
                  "start": 49,
                  "end": 76
                },
                "start": 43,
                "end": 76
              },
              "start": 41,
              "end": 76
            },
            "accessibility": null,
            "static": false,
            "start": 36,
            "end": 77
          }
        ],
        "start": 30,
        "end": 79
      },
      "declare": false,
      "start": 0,
      "end": 79
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WatchHandler",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 97
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 99
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 98,
            "end": 99
          }
        ],
        "start": 97,
        "end": 100
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 110
                },
                "typeArguments": null,
                "start": 109,
                "end": 110
              },
              "start": 107,
              "end": 110
            },
            "start": 104,
            "end": 110
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 115,
            "end": 119
          },
          "start": 112,
          "end": 119
        },
        "start": 103,
        "end": 119
      },
      "declare": false,
      "start": 80,
      "end": 120
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "extend",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 144
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 170
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 171,
                    "end": 173
                  }
                ],
                "start": 170,
                "end": 174
              },
              "start": 154,
              "end": 174
            },
            "start": 152,
            "end": 174
          },
          "start": 145,
          "end": 174
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 177,
          "end": 181
        },
        "start": 175,
        "end": 181
      },
      "body": null,
      "expression": false,
      "start": 121,
      "end": 182
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "vextend",
              "optional": false,
              "typeAnnotation": null,
              "start": 194,
              "end": 201
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "extend",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 210
            },
            "definite": false,
            "start": 194,
            "end": 210
          }
        ],
        "declare": false,
        "start": 190,
        "end": 211
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 183,
      "end": 211
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 211
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "vextend",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "vextend",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 15
          },
          "importKind": "value",
          "start": 8,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./func",
        "raw": "'./func'",
        "start": 22,
        "end": 30
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 64
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "vextend",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 74
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "watch",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 79,
                        "end": 84
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 92,
                              "end": 97
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "val",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 98,
                                  "end": 101
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 111,
                                          "end": 115
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "data2",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 116,
                                          "end": 121
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 111,
                                        "end": 121
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1",
                                        "start": 124,
                                        "end": 125
                                      },
                                      "start": 111,
                                      "end": 125
                                    },
                                    "directive": null,
                                    "start": 111,
                                    "end": 126
                                  }
                                ],
                                "start": 103,
                                "end": 132
                              },
                              "expression": false,
                              "start": 97,
                              "end": 132
                            },
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 92,
                            "end": 132
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 138,
                              "end": 143
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "val",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 144,
                                  "end": 147
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 149,
                                "end": 152
                              },
                              "expression": false,
                              "start": 143,
                              "end": 152
                            },
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 138,
                            "end": 152
                          }
                        ],
                        "start": 86,
                        "end": 157
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 79,
                      "end": 157
                    }
                  ],
                  "start": 75,
                  "end": 159
                }
              ],
              "optional": false,
              "start": 67,
              "end": 160
            },
            "definite": false,
            "start": 63,
            "end": 160
          }
        ],
        "declare": false,
        "start": 59,
        "end": 161
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 52,
      "end": 161
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 161
}
```
