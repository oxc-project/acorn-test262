__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 51,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 23,
          "name": "Constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": {
                "type": "Identifier",
                "start": 24,
                "end": 25,
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
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 29,
          "end": 50,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 30,
              "end": 44,
              "argument": {
                "type": "Identifier",
                "start": 33,
                "end": 37,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
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
              },
              "value": null
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
  "end": 176,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 45,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "name": "Constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "name": "Constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 45,
        "value": "./value-promise",
        "raw": "\"./value-promise\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 175,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 53,
        "end": 175,
        "id": {
          "type": "Identifier",
          "start": 67,
          "end": 77,
          "name": "BindingKey",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 81,
          "end": 175,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 85,
              "end": 104,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 94,
                "end": 100,
                "name": "__type",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 100,
                "end": 103,
                "typeAnnotation": {
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
              },
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 107,
              "end": 173,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 114,
                "end": 120,
                "name": "create",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 120,
                "end": 173,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 149,
                    "end": 156,
                    "name": "ctor",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 153,
                      "end": 156,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 155,
                        "end": 156,
                        "typeName": {
                          "type": "Identifier",
                          "start": 155,
                          "end": 156,
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
                "body": null,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 120,
                  "end": 148,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 121,
                      "end": 147,
                      "name": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 122,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 131,
                        "end": 147,
                        "typeName": {
                          "type": "Identifier",
                          "start": 131,
                          "end": 142,
                          "name": "Constructor",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 142,
                          "end": 147,
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 143,
                              "end": 146
                            }
                          ]
                        }
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
                  "start": 157,
                  "end": 172,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 159,
                    "end": 172,
                    "typeName": {
                      "type": "Identifier",
                      "start": 159,
                      "end": 169,
                      "name": "BindingKey",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 169,
                      "end": 172,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 170,
                          "end": 171,
                          "typeName": {
                            "type": "Identifier",
                            "start": 170,
                            "end": 171,
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
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 77,
          "end": 80,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 78,
              "end": 79,
              "name": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
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
        "implements": [],
        "abstract": false,
        "declare": true,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
  "end": 71,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 36,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 35,
        "value": "./src/value-promise",
        "raw": "\"./src/value-promise\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 37,
      "end": 70,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 51,
        "end": 69,
        "value": "./src/bindingkey",
        "raw": "\"./src/bindingkey\""
      },
      "attributes": [],
      "exportKind": "value"
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
  "end": 97,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 48,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "name": "Constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "name": "Constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 47,
        "value": "@loopback/context",
        "raw": "\"@loopback/context\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 49,
      "end": 96,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 56,
        "end": 96,
        "id": {
          "type": "Identifier",
          "start": 61,
          "end": 76,
          "name": "ControllerClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 79,
          "end": 95,
          "typeName": {
            "type": "Identifier",
            "start": 79,
            "end": 90,
            "name": "Constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
  "end": 199,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 48,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 24,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 24,
            "name": "ControllerClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 24,
            "name": "ControllerClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 32,
        "end": 47,
        "value": "./application",
        "raw": "'./application'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 49,
      "end": 96,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 58,
          "end": 68,
          "imported": {
            "type": "Identifier",
            "start": 58,
            "end": 68,
            "name": "BindingKey",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 58,
            "end": 68,
            "name": "BindingKey",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 76,
        "end": 95,
        "value": "@loopback/context",
        "raw": "'@loopback/context'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 98,
      "end": 178,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 105,
        "end": 178,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 111,
            "end": 177,
            "id": {
              "type": "Identifier",
              "start": 111,
              "end": 127,
              "name": "CONTROLLER_CLASS",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 130,
              "end": 177,
              "callee": {
                "type": "MemberExpression",
                "start": 130,
                "end": 147,
                "object": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 140,
                  "name": "BindingKey",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 147,
                  "name": "create",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "TSAsExpression",
                  "start": 165,
                  "end": 176,
                  "expression": {
                    "type": "Literal",
                    "start": 165,
                    "end": 169,
                    "value": null,
                    "raw": "null"
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 173,
                    "end": 176
                  }
                }
              ],
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
                      "name": "ControllerClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
