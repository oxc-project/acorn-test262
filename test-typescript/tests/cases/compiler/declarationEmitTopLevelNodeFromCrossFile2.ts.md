__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 98,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 38,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 37,
        "raw": "\"./boxedBox\"",
        "value": "./boxedBox",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "boxedBox",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "boxedBox",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 40,
      "end": 66,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 47,
        "end": 66,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 53,
            "end": 65,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 57,
              "end": 65,
              "decorators": [],
              "name": "boxedBox",
              "optional": false,
              "typeAnnotation": null
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 154,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 96,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 96,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 95,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 95,
              "decorators": [],
              "name": "boxedBox",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 29,
                "end": 95,
                "typeAnnotation": {
                  "type": "TSImportType",
                  "start": 31,
                  "end": 95,
                  "argument": {
                    "type": "TSLiteralType",
                    "start": 38,
                    "end": 45,
                    "literal": {
                      "type": "Literal",
                      "start": 38,
                      "end": 45,
                      "raw": "\"./box\"",
                      "value": "./box",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  "options": null,
                  "qualifier": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 50,
                    "decorators": [],
                    "name": "Box",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 50,
                    "end": 95,
                    "params": [
                      {
                        "type": "TSTypeLiteral",
                        "start": 51,
                        "end": 94,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 57,
                            "end": 92,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 57,
                              "end": 62,
                              "decorators": [],
                              "name": "boxed",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 62,
                              "end": 91,
                              "typeAnnotation": {
                                "type": "TSImportType",
                                "start": 64,
                                "end": 91,
                                "argument": {
                                  "type": "TSLiteralType",
                                  "start": 71,
                                  "end": 78,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 71,
                                    "end": 78,
                                    "raw": "\"./box\"",
                                    "value": "./box",
                                    "regex": null,
                                    "bigint": null
                                  }
                                },
                                "options": null,
                                "qualifier": {
                                  "type": "Identifier",
                                  "start": 80,
                                  "end": 83,
                                  "decorators": [],
                                  "name": "Box",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 83,
                                  "end": 91,
                                  "params": [
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 84,
                                      "end": 90
                                    }
                                  ]
                                }
                              }
                            }
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": true,
        "kind": "const"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
  "end": 122,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 72,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 72,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 28,
          "end": 72,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 34,
              "end": 43,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 34,
                "end": 39,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 42,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 41,
                  "end": 42,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 42,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "value": null
            },
            {
              "type": "MethodDefinition",
              "start": 48,
              "end": 70,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 48,
                "end": 59,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 59,
                "end": 70,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 60,
                    "end": 68,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 65,
                      "end": 68,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 67,
                        "end": 68,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 67,
                          "end": 68,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": true,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 24,
          "decorators": [],
          "name": "Box",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 24,
          "end": 27,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 25,
              "end": 26,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 25,
                "end": 26,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 73,
      "end": 122,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 80,
        "end": 122,
        "async": false,
        "body": null,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 97,
          "end": 100,
          "decorators": [],
          "name": "box",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 104,
            "end": 112,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 112,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 111,
                "end": 112,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 112,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 113,
          "end": 121,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 115,
            "end": 121,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 118,
              "end": 121,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 119,
                  "end": 120,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 120,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 115,
              "end": 118,
              "decorators": [],
              "name": "Box",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 100,
          "end": 103,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 101,
              "end": 102,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 101,
                "end": 102,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
  "sourceType": "module",
  "hashbang": null
}
```
