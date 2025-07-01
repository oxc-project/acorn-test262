__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 56
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "\"react\"",
          "start": 67,
          "end": 74
        },
        "start": 59,
        "end": 75
      },
      "importKind": "value",
      "start": 44,
      "end": 76
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 87
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 89
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 88,
            "end": 89
          }
        ],
        "start": 87,
        "end": 90
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "App",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 96,
                      "end": 101
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ComponentClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 102,
                      "end": 116
                    },
                    "start": 96,
                    "end": 116
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 117,
                          "end": 118
                        },
                        "typeArguments": null,
                        "start": 117,
                        "end": 118
                      }
                    ],
                    "start": 116,
                    "end": 119
                  },
                  "start": 96,
                  "end": 119
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 122,
                      "end": 127
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "StatelessComponent",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 146
                    },
                    "start": 122,
                    "end": 146
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 147,
                          "end": 148
                        },
                        "typeArguments": null,
                        "start": 147,
                        "end": 148
                      }
                    ],
                    "start": 146,
                    "end": 149
                  },
                  "start": 122,
                  "end": 149
                }
              ],
              "start": 96,
              "end": 149
            },
            "start": 94,
            "end": 149
          },
          "start": 91,
          "end": 149
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 152,
          "end": 156
        },
        "start": 150,
        "end": 156
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 170
            },
            "typeParameters": null,
            "superClass": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "React",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 184
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Component",
                "optional": false,
                "typeAnnotation": null,
                "start": 185,
                "end": 194
              },
              "optional": false,
              "computed": false,
              "start": 179,
              "end": 194
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 195,
                        "end": 196
                      },
                      "typeArguments": null,
                      "start": 195,
                      "end": 196
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 201,
                            "end": 202
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 204,
                              "end": 210
                            },
                            "start": 202,
                            "end": 210
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 201,
                          "end": 210
                        }
                      ],
                      "start": 199,
                      "end": 212
                    }
                  ],
                  "start": 195,
                  "end": 212
                }
              ],
              "start": 194,
              "end": 213
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "render",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 224,
                    "end": 230
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "JSXElement",
                            "openingElement": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "App",
                                "start": 255,
                                "end": 258
                              },
                              "typeArguments": null,
                              "attributes": [
                                {
                                  "type": "JSXSpreadAttribute",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 263,
                                      "end": 267
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "props",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 268,
                                      "end": 273
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 263,
                                    "end": 273
                                  },
                                  "start": 259,
                                  "end": 274
                                }
                              ],
                              "selfClosing": true,
                              "start": 254,
                              "end": 277
                            },
                            "children": [],
                            "closingElement": null,
                            "start": 254,
                            "end": 277
                          },
                          "start": 247,
                          "end": 278
                        }
                      ],
                      "start": 233,
                      "end": 288
                    },
                    "expression": false,
                    "start": 230,
                    "end": 288
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 224,
                  "end": 288
                }
              ],
              "start": 214,
              "end": 294
            },
            "abstract": false,
            "declare": false,
            "start": 163,
            "end": 294
          }
        ],
        "start": 157,
        "end": 296
      },
      "expression": false,
      "start": 77,
      "end": 296
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 44,
  "end": 296
}
```
