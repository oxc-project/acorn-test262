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
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 23,
          "end": 30
        },
        "start": 15,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "makeP",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 55
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
                "start": 56,
                "end": 57
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 56,
              "end": 57
            }
          ],
          "start": 55,
          "end": 58
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Ctor",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 70
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ComponentClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 71,
                    "end": 85
                  },
                  "start": 65,
                  "end": 85
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
                        "start": 86,
                        "end": 87
                      },
                      "typeArguments": null,
                      "start": 86,
                      "end": 87
                    }
                  ],
                  "start": 85,
                  "end": 88
                },
                "start": 65,
                "end": 88
              },
              "start": 63,
              "end": 88
            },
            "start": 59,
            "end": 88
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 114,
                    "end": 119
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PureComponent",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 120,
                    "end": 133
                  },
                  "optional": false,
                  "computed": false,
                  "start": 114,
                  "end": 133
                },
                "superTypeArguments": {
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
                        "start": 134,
                        "end": 135
                      },
                      "typeArguments": null,
                      "start": 134,
                      "end": 135
                    },
                    {
                      "type": "TSVoidKeyword",
                      "start": 137,
                      "end": 141
                    }
                  ],
                  "start": 133,
                  "end": 142
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
                        "start": 154,
                        "end": 160
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "JSX",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 164,
                                "end": 167
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Element",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 168,
                                "end": 175
                              },
                              "start": 164,
                              "end": 175
                            },
                            "typeArguments": null,
                            "start": 164,
                            "end": 175
                          },
                          "start": 162,
                          "end": 175
                        },
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
                                    "name": "Ctor",
                                    "start": 195,
                                    "end": 199
                                  },
                                  "typeArguments": null,
                                  "attributes": [
                                    {
                                      "type": "JSXSpreadAttribute",
                                      "argument": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 204,
                                          "end": 208
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "props",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 209,
                                          "end": 214
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 204,
                                        "end": 214
                                      },
                                      "start": 200,
                                      "end": 216
                                    }
                                  ],
                                  "selfClosing": true,
                                  "start": 194,
                                  "end": 219
                                },
                                "children": [],
                                "closingElement": null,
                                "start": 194,
                                "end": 219
                              },
                              "start": 181,
                              "end": 225
                            }
                          ],
                          "start": 176,
                          "end": 229
                        },
                        "expression": false,
                        "start": 160,
                        "end": 229
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public",
                      "start": 147,
                      "end": 229
                    }
                  ],
                  "start": 143,
                  "end": 232
                },
                "abstract": false,
                "declare": false,
                "start": 100,
                "end": 232
              },
              "start": 93,
              "end": 233
            }
          ],
          "start": 90,
          "end": 235
        },
        "expression": false,
        "start": 41,
        "end": 235
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 34,
      "end": 235
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 236
}
```
