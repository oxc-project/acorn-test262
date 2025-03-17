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
        "name": "ns",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "Type",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 46,
            "end": 67,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 53,
              "end": 67,
              "id": {
                "type": "Identifier",
                "start": 59,
                "end": 64,
                "name": "Class",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 65,
                "end": 67,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 70,
            "end": 94,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 77,
              "end": 94,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 83,
                  "end": 93,
                  "id": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 88,
                    "name": "Value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "const",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
                "name": "nested",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "id": {
                        "type": "Identifier",
                        "start": 140,
                        "end": 151,
                        "name": "NestedClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 152,
                        "end": 177,
                        "body": [
                          {
                            "type": "PropertyDefinition",
                            "start": 160,
                            "end": 171,
                            "static": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 160,
                              "end": 161,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": null,
                            "decorators": [],
                            "declare": false,
                            "override": false,
                            "optional": false,
                            "definite": true,
                            "readonly": false,
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
                            "accessibility": null
                          }
                        ]
                      },
                      "decorators": [],
                      "typeParameters": null,
                      "implements": [],
                      "abstract": false,
                      "declare": false,
                      "superTypeArguments": null
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  }
                ]
              },
              "kind": "namespace",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
        "name": "ns",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
  "end": 146,
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
            "name": "ns",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
          "name": "ns",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 31,
          "end": 36,
          "name": "Class",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
          "name": "ns",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 50,
          "end": 55,
          "name": "Value",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 81,
            "name": "c",
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
                    "name": "ns",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 81,
                    "name": "Class",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 97,
            "name": "t",
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
                    "name": "ns",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 97,
                    "name": "Type",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 132,
            "name": "n",
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
                      "name": "ns",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 114,
                      "end": 120,
                      "name": "nested",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 132,
                    "name": "NestedClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 138,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 140,
                  "end": 142,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
