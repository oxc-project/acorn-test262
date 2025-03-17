__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 297,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 44,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 56,
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 59,
        "end": 75,
        "expression": {
          "type": "Literal",
          "start": 67,
          "end": 74,
          "value": "react",
          "raw": "\"react\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 77,
      "end": 296,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
        "name": "f",
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
          "start": 91,
          "end": 149,
          "name": "App",
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
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 96,
                    "end": 116,
                    "left": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 101,
                      "name": "React",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 116,
                      "name": "ComponentClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 116,
                    "end": 119,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 117,
                        "end": 118,
                        "typeName": {
                          "type": "Identifier",
                          "start": 117,
                          "end": 118,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 122,
                  "end": 149,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 122,
                    "end": 146,
                    "left": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 127,
                      "name": "React",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 146,
                      "name": "StatelessComponent",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 146,
                    "end": 149,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 147,
                        "end": 148,
                        "typeName": {
                          "type": "Identifier",
                          "start": 147,
                          "end": 148,
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
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 157,
        "end": 296,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 163,
            "end": 294,
            "id": {
              "type": "Identifier",
              "start": 169,
              "end": 170,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "MemberExpression",
              "start": 179,
              "end": 194,
              "object": {
                "type": "Identifier",
                "start": 179,
                "end": 184,
                "name": "React",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 185,
                "end": 194,
                "name": "Component",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 214,
              "end": 294,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 224,
                  "end": 288,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 224,
                    "end": 230,
                    "name": "render",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 230,
                    "end": 288,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 263,
                                      "end": 267
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 268,
                                      "end": 273,
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
                                "start": 255,
                                "end": 258,
                                "name": "App"
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
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 195,
                        "end": 196,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 201,
                            "end": 202,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 202,
                            "end": 210,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 204,
                              "end": 210
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 87,
        "end": 90,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 88,
            "end": 89,
            "name": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 150,
        "end": 156,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 152,
          "end": 156
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
