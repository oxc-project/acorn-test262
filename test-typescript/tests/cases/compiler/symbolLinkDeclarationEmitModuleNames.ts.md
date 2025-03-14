monorepo/core/src/application.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 96,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 48,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 47,
        "raw": "\"@loopback/context\"",
        "value": "@loopback/context"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "Constructor",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "Constructor",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 49,
      "end": 96,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 56,
        "end": 96,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 61,
          "end": 76,
          "decorators": [],
          "name": "ControllerClass",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 79,
          "end": 95,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 90,
            "end": 95,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 91,
                "end": 94
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 79,
            "end": 90,
            "decorators": [],
            "name": "Constructor",
            "optional": false
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
monorepo/core/src/usage.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 198,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 48,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 32,
        "end": 47,
        "raw": "'./application'",
        "value": "./application"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 24,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 24,
            "decorators": [],
            "name": "ControllerClass",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 24,
            "decorators": [],
            "name": "ControllerClass",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 49,
      "end": 96,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 76,
        "end": 95,
        "raw": "'@loopback/context'",
        "value": "@loopback/context"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 58,
          "end": 68,
          "imported": {
            "type": "Identifier",
            "start": 58,
            "end": 68,
            "decorators": [],
            "name": "BindingKey",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 58,
            "end": 68,
            "decorators": [],
            "name": "BindingKey",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 98,
      "end": 178,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 105,
        "end": 178,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 111,
            "end": 177,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 111,
              "end": 127,
              "decorators": [],
              "name": "CONTROLLER_CLASS",
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 130,
              "end": 177,
              "arguments": [
                {
                  "type": "TSAsExpression",
                  "start": 165,
                  "end": 176,
                  "expression": {
                    "type": "Literal",
                    "start": 165,
                    "end": 169,
                    "raw": "null",
                    "value": null
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 173,
                    "end": 176
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 130,
                "end": 147,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 140,
                  "decorators": [],
                  "name": "BindingKey",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 147,
                  "decorators": [],
                  "name": "create",
                  "optional": false
                }
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 147,
                "end": 164,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 148,
                    "end": 163,
                    "typeName": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 163,
                      "decorators": [],
                      "name": "ControllerClass",
                      "optional": false
                    }
                  }
                ]
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
monorepo/context/src/value-promise.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 51,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 51,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 23,
          "decorators": [],
          "name": "Constructor",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 29,
          "end": 50,
          "params": [
            {
              "type": "RestElement",
              "start": 30,
              "end": 44,
              "argument": {
                "type": "Identifier",
                "start": 33,
                "end": 37,
                "decorators": [],
                "name": "args",
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 37,
                "end": 44,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 39,
                  "end": 44,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 39,
                    "end": 42
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 46,
            "end": 50,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 49,
              "end": 50,
              "typeName": {
                "type": "Identifier",
                "start": 49,
                "end": 50,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 23,
          "end": 26,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 24,
              "end": 25,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 24,
                "end": 25,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
monorepo/context/src/bindingkey.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 192,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 47,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 47,
        "raw": "\"@loopback/context\"",
        "value": "@loopback/context"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "Constructor",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "Constructor",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 48,
      "end": 191,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 55,
        "end": 191,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 75,
          "end": 191,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 79,
              "end": 98,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 88,
                "end": 94,
                "decorators": [],
                "name": "__type",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 94,
                "end": 97,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 96,
                  "end": 97,
                  "typeName": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 97,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "value": null
            },
            {
              "type": "MethodDefinition",
              "start": 101,
              "end": 189,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 108,
                "end": 114,
                "decorators": [],
                "name": "create",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 114,
                "end": 189,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 152,
                  "end": 189,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 158,
                      "end": 185,
                      "argument": {
                        "type": "NewExpression",
                        "start": 165,
                        "end": 184,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 179,
                          "decorators": [],
                          "name": "BindingKey",
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 179,
                          "end": 182,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 180,
                              "end": 181,
                              "typeName": {
                                "type": "Identifier",
                                "start": 180,
                                "end": 181,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 143,
                    "end": 150,
                    "decorators": [],
                    "name": "ctor",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 147,
                      "end": 150,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 149,
                        "end": 150,
                        "typeName": {
                          "type": "Identifier",
                          "start": 149,
                          "end": 150,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 114,
                  "end": 142,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 115,
                      "end": 141,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 125,
                        "end": 141,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 136,
                          "end": 141,
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 137,
                              "end": 140
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 125,
                          "end": 136,
                          "decorators": [],
                          "name": "Constructor",
                          "optional": false
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 115,
                        "end": 116,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 61,
          "end": 71,
          "decorators": [],
          "name": "BindingKey",
          "optional": false
        },
        "implements": [],
        "superClass": null,
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
monorepo/context/index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 71,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 36,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 35,
        "raw": "\"./src/value-promise\"",
        "value": "./src/value-promise"
      }
    },
    {
      "type": "ExportAllDeclaration",
      "start": 37,
      "end": 70,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 51,
        "end": 69,
        "raw": "\"./src/bindingkey\"",
        "value": "./src/bindingkey"
      }
    }
  ],
  "sourceType": "module"
}
```
