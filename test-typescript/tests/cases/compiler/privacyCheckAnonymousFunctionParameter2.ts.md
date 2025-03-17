__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 241,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 17,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 16,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 16,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 53,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 71,
        "name": "Iterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 71,
        "end": 74,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 72,
            "end": 73,
            "name": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 75,
        "end": 83,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 77,
            "end": 81,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "T",
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
      "type": "TSModuleDeclaration",
      "start": 85,
      "end": 181,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
        "name": "Q",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 94,
        "end": 181,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 100,
            "end": 179,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 107,
              "end": 179,
              "id": {
                "type": "Identifier",
                "start": 116,
                "end": 119,
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
                  "start": 123,
                  "end": 152,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 124,
                    "end": 152,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 126,
                      "end": 152,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 127,
                          "end": 141,
                          "name": "a",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 128,
                            "end": 141,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 130,
                              "end": 141,
                              "typeName": {
                                "type": "Identifier",
                                "start": 130,
                                "end": 138,
                                "name": "Iterator",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 138,
                                "end": 141,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 139,
                                    "end": 140,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 139,
                                      "end": 140,
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
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 143,
                        "end": 152,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 146,
                          "end": 152
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 154,
                "end": 179,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 164,
                    "end": 173,
                    "argument": {
                      "type": "Identifier",
                      "start": 171,
                      "end": 172,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 119,
                "end": 122,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 120,
                    "end": 121,
                    "name": {
                      "type": "Identifier",
                      "start": 120,
                      "end": 121,
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
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 183,
      "end": 241,
      "id": {
        "type": "Identifier",
        "start": 190,
        "end": 191,
        "name": "Q",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 192,
        "end": 241,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 198,
            "end": 239,
            "id": {
              "type": "Identifier",
              "start": 207,
              "end": 210,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 213,
              "end": 239,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 223,
                  "end": 233,
                  "expression": {
                    "type": "CallExpression",
                    "start": 223,
                    "end": 232,
                    "callee": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 226,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 227,
                        "end": 231,
                        "value": null,
                        "raw": "null"
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
