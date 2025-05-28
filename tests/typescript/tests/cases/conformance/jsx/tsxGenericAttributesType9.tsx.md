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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "value": "react",
          "raw": "'react'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 34,
      "end": 235,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 41,
        "end": 235,
        "id": {
          "type": "Identifier",
          "start": 50,
          "end": 55,
          "decorators": [],
          "name": "makeP",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 55,
          "end": 58,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 56,
              "end": 57,
              "name": {
                "type": "Identifier",
                "start": 56,
                "end": 57,
                "decorators": [],
                "name": "P",
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
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 85,
                  "end": 88,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 86,
                      "end": 87,
                      "typeName": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 87,
                        "decorators": [],
                        "name": "P",
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
        "returnType": null,
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
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "MemberExpression",
                  "start": 114,
                  "end": 133,
                  "object": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 119,
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 133,
                    "decorators": [],
                    "name": "PureComponent",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 135,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSVoidKeyword",
                      "start": 137,
                      "end": 141
                    }
                  ]
                },
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 143,
                  "end": 232,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 147,
                      "end": 229,
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
                      "value": {
                        "type": "FunctionExpression",
                        "start": 160,
                        "end": 229,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 162,
                          "end": 175,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 164,
                            "end": 175,
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
                            },
                            "typeArguments": null
                          }
                        },
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
                                "openingElement": {
                                  "type": "JSXOpeningElement",
                                  "start": 194,
                                  "end": 219,
                                  "name": {
                                    "type": "JSXIdentifier",
                                    "start": 195,
                                    "end": 199,
                                    "name": "Ctor"
                                  },
                                  "typeArguments": null,
                                  "attributes": [
                                    {
                                      "type": "JSXSpreadAttribute",
                                      "start": 200,
                                      "end": 216,
                                      "argument": {
                                        "type": "MemberExpression",
                                        "start": 204,
                                        "end": 214,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 204,
                                          "end": 208
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 209,
                                          "end": 214,
                                          "decorators": [],
                                          "name": "props",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      }
                                    }
                                  ],
                                  "selfClosing": true
                                },
                                "children": [],
                                "closingElement": null
                              }
                            }
                          ]
                        },
                        "expression": false
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public"
                    }
                  ]
                },
                "abstract": false,
                "declare": false
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
