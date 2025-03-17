__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 237,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
          "name": "makeP",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 59,
            "end": 88,
            "name": "Ctor",
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
                    "name": "React",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 85,
                    "name": "ComponentClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
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
                "id": null,
                "superClass": {
                  "type": "MemberExpression",
                  "start": 114,
                  "end": 133,
                  "object": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 119,
                    "name": "React",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 133,
                    "name": "PureComponent",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "body": {
                  "type": "ClassBody",
                  "start": 143,
                  "end": 232,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 147,
                      "end": 229,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 154,
                        "end": 160,
                        "name": "render",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "method",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 160,
                        "end": 229,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                          "name": "props",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
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
                                },
                                "closingElement": null,
                                "children": []
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
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
                                "name": "JSX",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 168,
                                "end": 175,
                                "name": "Element",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "decorators": [],
                      "override": false,
                      "optional": false,
                      "accessibility": "public"
                    }
                  ]
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
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
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSVoidKeyword",
                      "start": 137,
                      "end": 141
                    }
                  ]
                }
              }
            }
          ]
        },
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
                "name": "P",
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
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
