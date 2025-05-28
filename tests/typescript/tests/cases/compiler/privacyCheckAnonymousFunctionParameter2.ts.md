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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 16,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 53,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 71,
        "decorators": [],
        "name": "Iterator",
        "optional": false,
        "typeAnnotation": null
      },
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
      "extends": [],
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
        "decorators": [],
        "name": "Q",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 123,
                  "end": 152,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                          "decorators": [],
                          "name": "a",
                          "optional": false,
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
                                "decorators": [],
                                "name": "Iterator",
                                "optional": false,
                                "typeAnnotation": null
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
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
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
                  }
                }
              ],
              "returnType": null,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
        "decorators": [],
        "name": "Q",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
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
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 227,
                        "end": 231,
                        "value": null,
                        "raw": "null"
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
