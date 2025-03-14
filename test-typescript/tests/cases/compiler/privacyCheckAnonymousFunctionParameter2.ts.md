privacyCheckAnonymousFunctionParameter2.ts
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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 17,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 16,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 16,
              "raw": "1",
              "value": 1
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 53,
      "end": 83,
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
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "optional": false
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
        "start": 63,
        "end": 71,
        "decorators": [],
        "name": "Iterator",
        "optional": false
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
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
      "type": "TSModuleDeclaration",
      "start": 85,
      "end": 181,
      "body": {
        "type": "TSModuleBlock",
        "start": 94,
        "end": 181,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 100,
            "end": 179,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 107,
              "end": 179,
              "async": false,
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
                "start": 116,
                "end": 119,
                "decorators": [],
                "name": "foo",
                "optional": false
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
                                      "optional": false
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 130,
                                "end": 138,
                                "decorators": [],
                                "name": "Iterator",
                                "optional": false
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
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 119,
                "end": 122,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 120,
                    "end": 121,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 120,
                      "end": 121,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
        "decorators": [],
        "name": "Q",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 183,
      "end": 241,
      "body": {
        "type": "TSModuleBlock",
        "start": 192,
        "end": 241,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 198,
            "end": 239,
            "async": false,
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
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 227,
                        "end": 231,
                        "raw": "null",
                        "value": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 226,
                      "decorators": [],
                      "name": "foo",
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
              "start": 207,
              "end": 210,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "params": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 190,
        "end": 191,
        "decorators": [],
        "name": "Q",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
