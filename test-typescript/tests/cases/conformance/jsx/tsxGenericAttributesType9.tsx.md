__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 236,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "raw": "'react'",
          "value": "react",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 34,
      "end": 235,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 41,
        "end": 235,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 90,
          "end": 235,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 93,
              "end": 233,
              "argument": {
                "type": "ClassExpression",
                "start": 100,
                "end": 232,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 143,
                  "end": 232,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 147,
                      "end": 229,
                      "accessibility": "public",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 154,
                        "end": 160,
                        "decorators": [],
                        "name": "render",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 160,
                        "end": 229,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 176,
                          "end": 229,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 181,
                              "end": 225,
                              "argument": {
                                "type": "JSXElement",
                                "start": 194,
                                "end": 219,
                                "children": [],
                                "closingElement": null,
                                "openingElement": {
                                  "type": "JSXOpeningElement",
                                  "start": 194,
                                  "end": 219,
                                  "attributes": [
                                    {
                                      "type": "JSXSpreadAttribute",
                                      "start": 200,
                                      "end": 216,
                                      "argument": {
                                        "type": "MemberExpression",
                                        "start": 204,
                                        "end": 214,
                                        "computed": false,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 204,
                                          "end": 208
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 209,
                                          "end": 214,
                                          "decorators": [],
                                          "name": "props",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    }
                                  ],
                                  "name": {
                                    "type": "JSXIdentifier",
                                    "start": 195,
                                    "end": 199,
                                    "name": "Ctor"
                                  },
                                  "selfClosing": true,
                                  "typeArguments": null
                                }
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 162,
                          "end": 175,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 164,
                            "end": 175,
                            "typeArguments": null,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 164,
                              "end": 175,
                              "left": {
                                "type": "Identifier",
                                "start": 164,
                                "end": 167,
                                "decorators": [],
                                "name": "JSX",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 168,
                                "end": 175,
                                "decorators": [],
                                "name": "Element",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  ]
                },
                "declare": false,
                "decorators": [],
                "id": null,
                "implements": [],
                "superClass": {
                  "type": "MemberExpression",
                  "start": 114,
                  "end": 133,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 119,
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 133,
                    "decorators": [],
                    "name": "PureComponent",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "superTypeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 133,
                  "end": 142,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 134,
                      "end": 135,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 135,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSVoidKeyword",
                      "start": 137,
                      "end": 141
                    }
                  ]
                },
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 50,
          "end": 55,
          "decorators": [],
          "name": "makeP",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 59,
            "end": 88,
            "decorators": [],
            "name": "Ctor",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 88,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 65,
                "end": 88,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 85,
                  "end": 88,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 86,
                      "end": 87,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 87,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 65,
                  "end": 85,
                  "left": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 70,
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 85,
                    "decorators": [],
                    "name": "ComponentClass",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 55,
          "end": 58,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 56,
              "end": 57,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 56,
                "end": 57,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
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
  "sourceType": "module",
  "hashbang": null
}
```
