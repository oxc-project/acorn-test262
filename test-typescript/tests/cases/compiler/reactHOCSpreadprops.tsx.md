__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 296,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 44,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 56,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 59,
        "end": 75,
        "expression": {
          "type": "Literal",
          "start": 67,
          "end": 74,
          "raw": "\"react\"",
          "value": "react",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 77,
      "end": 296,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 157,
        "end": 296,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 163,
            "end": 294,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 214,
              "end": 294,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 224,
                  "end": 288,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 224,
                    "end": 230,
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
                    "start": 230,
                    "end": 288,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 233,
                      "end": 288,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 247,
                          "end": 278,
                          "argument": {
                            "type": "JSXElement",
                            "start": 254,
                            "end": 277,
                            "children": [],
                            "closingElement": null,
                            "openingElement": {
                              "type": "JSXOpeningElement",
                              "start": 254,
                              "end": 277,
                              "attributes": [
                                {
                                  "type": "JSXSpreadAttribute",
                                  "start": 259,
                                  "end": 274,
                                  "argument": {
                                    "type": "MemberExpression",
                                    "start": 263,
                                    "end": 273,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 263,
                                      "end": 267
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 268,
                                      "end": 273,
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
                                "start": 255,
                                "end": 258,
                                "name": "App"
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
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 169,
              "end": 170,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": {
              "type": "MemberExpression",
              "start": 179,
              "end": 194,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 179,
                "end": 184,
                "decorators": [],
                "name": "React",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 185,
                "end": 194,
                "decorators": [],
                "name": "Component",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 194,
              "end": 213,
              "params": [
                {
                  "type": "TSIntersectionType",
                  "start": 195,
                  "end": 212,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 195,
                      "end": 196,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 195,
                        "end": 196,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 199,
                      "end": 212,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 201,
                          "end": 210,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 201,
                            "end": 202,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 202,
                            "end": 210,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 204,
                              "end": 210
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 91,
          "end": 149,
          "decorators": [],
          "name": "App",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 94,
            "end": 149,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 96,
              "end": 149,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 96,
                  "end": 119,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 116,
                    "end": 119,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 117,
                        "end": 118,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 117,
                          "end": 118,
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
                    "start": 96,
                    "end": 116,
                    "left": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 101,
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 116,
                      "decorators": [],
                      "name": "ComponentClass",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 122,
                  "end": 149,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 146,
                    "end": 149,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 147,
                        "end": 148,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 147,
                          "end": 148,
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
                    "start": 122,
                    "end": 146,
                    "left": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 127,
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 146,
                      "decorators": [],
                      "name": "StatelessComponent",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 150,
        "end": 156,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 152,
          "end": 156
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 87,
        "end": 90,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 88,
            "end": 89,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
