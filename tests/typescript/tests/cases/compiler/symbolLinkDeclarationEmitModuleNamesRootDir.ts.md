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
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null
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
          "start": 29,
          "end": 50,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 30,
              "end": 44,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 33,
                "end": 37,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
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
            "decorators": [],
            "name": "Constructor",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "Constructor",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 67,
          "end": 77,
          "decorators": [],
          "name": "BindingKey",
          "optional": false,
          "typeAnnotation": null
        },
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
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 81,
          "end": 175,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 85,
              "end": 104,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 94,
                "end": 100,
                "decorators": [],
                "name": "__type",
                "optional": false,
                "typeAnnotation": null
              },
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 107,
              "end": 173,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 114,
                "end": 120,
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 120,
                "end": 173,
                "id": null,
                "generator": false,
                "async": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 131,
                        "end": 147,
                        "typeName": {
                          "type": "Identifier",
                          "start": 131,
                          "end": 142,
                          "decorators": [],
                          "name": "Constructor",
                          "optional": false,
                          "typeAnnotation": null
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 149,
                    "end": 156,
                    "decorators": [],
                    "name": "ctor",
                    "optional": false,
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
                      "decorators": [],
                      "name": "BindingKey",
                      "optional": false,
                      "typeAnnotation": null
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
                },
                "body": null,
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
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
            "decorators": [],
            "name": "Constructor",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "Constructor",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
          "decorators": [],
          "name": "ControllerClass",
          "optional": false,
          "typeAnnotation": null
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
            "decorators": [],
            "name": "Constructor",
            "optional": false,
            "typeAnnotation": null
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
      "exportKind": "type",
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
            "decorators": [],
            "name": "ControllerClass",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 24,
            "decorators": [],
            "name": "ControllerClass",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "BindingKey",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 58,
            "end": 68,
            "decorators": [],
            "name": "BindingKey",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 111,
            "end": 177,
            "id": {
              "type": "Identifier",
              "start": 111,
              "end": 127,
              "decorators": [],
              "name": "CONTROLLER_CLASS",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "BindingKey",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 147,
                  "decorators": [],
                  "name": "create",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
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
