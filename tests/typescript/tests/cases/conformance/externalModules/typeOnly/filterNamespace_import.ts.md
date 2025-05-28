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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 183,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 17,
            "end": 43,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 24,
              "end": 43,
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 33,
                "decorators": [],
                "name": "Type",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 36,
                "end": 42
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 46,
            "end": 67,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 53,
              "end": 67,
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
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 65,
                "end": 67,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 70,
            "end": 94,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 77,
              "end": 94,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 83,
                  "end": 93,
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
                    "value": "",
                    "raw": "\"\""
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
            "type": "ExportNamedDeclaration",
            "start": 97,
            "end": 181,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 104,
              "end": 181,
              "id": {
                "type": "Identifier",
                "start": 114,
                "end": 120,
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 121,
                "end": 181,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 127,
                    "end": 177,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 134,
                      "end": 177,
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
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 152,
                        "end": 177,
                        "body": [
                          {
                            "type": "PropertyDefinition",
                            "start": 160,
                            "end": 171,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "start": 160,
                              "end": 161,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
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
                            "value": null,
                            "computed": false,
                            "static": false,
                            "declare": false,
                            "override": false,
                            "optional": false,
                            "definite": true,
                            "readonly": false,
                            "accessibility": null
                          }
                        ]
                      },
                      "abstract": false,
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "namespace",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
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
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 26,
        "value": "./ns",
        "raw": "'./ns'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "ExpressionStatement",
      "start": 28,
      "end": 37,
      "expression": {
        "type": "MemberExpression",
        "start": 28,
        "end": 36,
        "object": {
          "type": "Identifier",
          "start": 28,
          "end": 30,
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 31,
          "end": 36,
          "decorators": [],
          "name": "Class",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 56,
      "expression": {
        "type": "MemberExpression",
        "start": 47,
        "end": 55,
        "object": {
          "type": "Identifier",
          "start": 47,
          "end": 49,
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 50,
          "end": 55,
          "decorators": [],
          "name": "Value",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 82,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 81,
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
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 83,
      "end": 103,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 102,
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
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 100,
            "end": 102,
            "value": "",
            "raw": "\"\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 104,
      "end": 145,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 144,
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
                },
                "typeArguments": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 138,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 140,
                  "end": 142,
                  "value": "",
                  "raw": "''"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
