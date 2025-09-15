__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 45
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "div",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 56,
                    "end": 59
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 61,
                      "end": 67
                    },
                    "start": 59,
                    "end": 67
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 56,
                  "end": 68
                }
              ],
              "start": 46,
              "end": 74
            },
            "declare": false,
            "start": 28,
            "end": 74
          }
        ],
        "start": 22,
        "end": 76
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 76
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 100
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Component",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 122
            },
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
                    "start": 123,
                    "end": 124
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 123,
                  "end": 124
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 126,
                    "end": 127
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 126,
                  "end": 127
                }
              ],
              "start": 122,
              "end": 128
            },
            "superClass": null,
            "superTypeArguments": null,
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
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 139,
                    "end": 150
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "props",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 159,
                              "end": 160
                            },
                            "typeArguments": null,
                            "start": 159,
                            "end": 160
                          },
                          "start": 157,
                          "end": 160
                        },
                        "start": 151,
                        "end": 160
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 172,
                            "end": 175
                          },
                          "start": 170,
                          "end": 175
                        },
                        "start": 162,
                        "end": 175
                      }
                    ],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 150,
                    "end": 177
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 139,
                  "end": 177
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 186,
                    "end": 191
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 193,
                        "end": 194
                      },
                      "typeArguments": null,
                      "start": 193,
                      "end": 194
                    },
                    "start": 191,
                    "end": 194
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 186,
                  "end": 195
                }
              ],
              "start": 129,
              "end": 201
            },
            "abstract": false,
            "declare": false,
            "start": 107,
            "end": 201
          }
        ],
        "start": 101,
        "end": 203
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 77,
      "end": 203
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ShortDetails",
          "optional": false,
          "typeAnnotation": null,
          "start": 218,
          "end": 230
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
            "start": 239,
            "end": 244
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 254
          },
          "optional": false,
          "computed": false,
          "start": 239,
          "end": 254
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
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
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 257,
                    "end": 259
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 261,
                      "end": 267
                    },
                    "start": 259,
                    "end": 267
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 257,
                  "end": 267
                }
              ],
              "start": 255,
              "end": 269
            },
            {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 271,
              "end": 273
            }
          ],
          "start": 254,
          "end": 274
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
                "start": 288,
                "end": 294
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
                        "start": 298,
                        "end": 301
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Element",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 302,
                        "end": 309
                      },
                      "start": 298,
                      "end": 309
                    },
                    "typeArguments": null,
                    "start": 298,
                    "end": 309
                  },
                  "start": 296,
                  "end": 309
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 324,
                              "end": 328
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "props",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 329,
                              "end": 334
                            },
                            "optional": false,
                            "computed": false,
                            "start": 324,
                            "end": 334
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 335,
                            "end": 337
                          },
                          "optional": false,
                          "computed": false,
                          "start": 324,
                          "end": 337
                        },
                        "operator": "<",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 340,
                          "end": 341
                        },
                        "start": 324,
                        "end": 341
                      },
                      "consequent": {
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
                                  "name": "div",
                                  "start": 366,
                                  "end": 369
                                },
                                "typeArguments": null,
                                "attributes": [],
                                "selfClosing": false,
                                "start": 365,
                                "end": 370
                              },
                              "children": [],
                              "closingElement": {
                                "type": "JSXClosingElement",
                                "name": {
                                  "type": "JSXIdentifier",
                                  "name": "div",
                                  "start": 372,
                                  "end": 375
                                },
                                "start": 370,
                                "end": 376
                              },
                              "start": 365,
                              "end": 376
                            },
                            "start": 357,
                            "end": 378
                          }
                        ],
                        "start": 343,
                        "end": 388
                      },
                      "alternate": null,
                      "start": 320,
                      "end": 388
                    }
                  ],
                  "start": 310,
                  "end": 394
                },
                "expression": false,
                "start": 294,
                "end": 394
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 281,
              "end": 394
            }
          ],
          "start": 275,
          "end": 396
        },
        "abstract": false,
        "declare": false,
        "start": 212,
        "end": 396
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 205,
      "end": 396
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 396
}
```
