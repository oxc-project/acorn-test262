__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 204,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 183,
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 183,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 17,
            "end": 43,
            "attributes": [],
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 24,
              "end": 43,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 33,
                "decorators": [],
                "name": "Type",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 36,
                "end": 42
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 46,
            "end": 67,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 53,
              "end": 67,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 65,
                "end": 67,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 59,
                "end": 64,
                "decorators": [],
                "name": "Class",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 70,
            "end": 94,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 77,
              "end": 94,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 83,
                  "end": 93,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 88,
                    "decorators": [],
                    "name": "Value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 91,
                    "end": 93,
                    "raw": "\"\"",
                    "value": ""
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 97,
            "end": 181,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 104,
              "end": 181,
              "body": {
                "type": "TSModuleBlock",
                "start": 121,
                "end": 181,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 127,
                    "end": 177,
                    "attributes": [],
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 134,
                      "end": 177,
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "start": 152,
                        "end": 177,
                        "body": [
                          {
                            "type": "PropertyDefinition",
                            "start": 160,
                            "end": 171,
                            "accessibility": null,
                            "computed": false,
                            "declare": false,
                            "decorators": [],
                            "definite": true,
                            "key": {
                              "type": "Identifier",
                              "start": 160,
                              "end": 161,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "override": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 162,
                              "end": 170,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 164,
                                "end": 170
                              }
                            },
                            "value": null
                          }
                        ]
                      },
                      "declare": false,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 140,
                        "end": 151,
                        "decorators": [],
                        "name": "NestedClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "implements": [],
                      "superClass": null,
                      "superTypeArguments": null,
                      "typeParameters": null
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
                "start": 114,
                "end": 120,
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "namespace"
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
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 185,
      "end": 203,
      "declaration": {
        "type": "Identifier",
        "start": 200,
        "end": 202,
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null
      },
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
  "end": 145,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 26,
        "raw": "'./ns'",
        "value": "./ns"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 12,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 28,
      "end": 37,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 28,
        "end": 36,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 28,
          "end": 30,
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 31,
          "end": 36,
          "decorators": [],
          "name": "Class",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 56,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 47,
        "end": 55,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 47,
          "end": 49,
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 50,
          "end": 55,
          "decorators": [],
          "name": "Value",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 81,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 81,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 81,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 73,
                "end": 81,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 73,
                  "end": 81,
                  "left": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 75,
                    "decorators": [],
                    "name": "ns",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 81,
                    "decorators": [],
                    "name": "Class",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 83,
      "end": 103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 102,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 97,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 97,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 90,
                "end": 97,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 90,
                  "end": 97,
                  "left": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 92,
                    "decorators": [],
                    "name": "ns",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 97,
                    "decorators": [],
                    "name": "Type",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 100,
            "end": 102,
            "raw": "\"\"",
            "value": ""
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 104,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 144,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 132,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 132,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 111,
                "end": 132,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 111,
                  "end": 132,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 111,
                    "end": 120,
                    "left": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 113,
                      "decorators": [],
                      "name": "ns",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 114,
                      "end": 120,
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 132,
                    "decorators": [],
                    "name": "NestedClass",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 135,
            "end": 144,
            "properties": [
              {
                "type": "Property",
                "start": 137,
                "end": 142,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 138,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 140,
                  "end": 142,
                  "raw": "''",
                  "value": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
