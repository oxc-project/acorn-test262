__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 61
          },
          "start": 51,
          "end": 61
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 67,
        "end": 74
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 75
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myHigherOrderComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 108
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
              "start": 109,
              "end": 110
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 109,
            "end": 110
          }
        ],
        "start": 108,
        "end": 111
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Inner",
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
                  "start": 119,
                  "end": 124
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ComponentClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 139
                },
                "start": 119,
                "end": 139
              },
              "typeArguments": {
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
                          "start": 140,
                          "end": 141
                        },
                        "typeArguments": null,
                        "start": 140,
                        "end": 141
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
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 145,
                              "end": 149
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 151,
                                "end": 157
                              },
                              "start": 149,
                              "end": 157
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 145,
                            "end": 157
                          }
                        ],
                        "start": 144,
                        "end": 158
                      }
                    ],
                    "start": 140,
                    "end": 158
                  }
                ],
                "start": 139,
                "end": 159
              },
              "start": 119,
              "end": 159
            },
            "start": 117,
            "end": 159
          },
          "start": 112,
          "end": 159
        }
      ],
      "returnType": {
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
              "start": 162,
              "end": 167
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 182
            },
            "start": 162,
            "end": 182
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
                  "start": 183,
                  "end": 184
                },
                "typeArguments": null,
                "start": 183,
                "end": 184
              }
            ],
            "start": 182,
            "end": 185
          },
          "start": 162,
          "end": 185
        },
        "start": 160,
        "end": 185
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "OuterComponent",
                "optional": false,
                "typeAnnotation": null,
                "start": 205,
                "end": 219
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
                  "start": 228,
                  "end": 233
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 234,
                  "end": 243
                },
                "optional": false,
                "computed": false,
                "start": 228,
                "end": 243
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
                      "start": 244,
                      "end": 245
                    },
                    "typeArguments": null,
                    "start": 244,
                    "end": 245
                  }
                ],
                "start": 243,
                "end": 246
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
                      "start": 257,
                      "end": 263
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
                                  "name": "Inner",
                                  "start": 288,
                                  "end": 293
                                },
                                "typeArguments": null,
                                "attributes": [
                                  {
                                    "type": "JSXSpreadAttribute",
                                    "argument": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 298,
                                        "end": 302
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "props",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 303,
                                        "end": 308
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 298,
                                      "end": 308
                                    },
                                    "start": 294,
                                    "end": 309
                                  },
                                  {
                                    "type": "JSXAttribute",
                                    "name": {
                                      "type": "JSXIdentifier",
                                      "name": "name",
                                      "start": 310,
                                      "end": 314
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": "Matt",
                                      "raw": "\"Matt\"",
                                      "start": 315,
                                      "end": 321
                                    },
                                    "start": 310,
                                    "end": 321
                                  }
                                ],
                                "selfClosing": true,
                                "start": 287,
                                "end": 323
                              },
                              "children": [],
                              "closingElement": null,
                              "start": 287,
                              "end": 323
                            },
                            "start": 280,
                            "end": 324
                          }
                        ],
                        "start": 266,
                        "end": 334
                      },
                      "expression": false,
                      "start": 263,
                      "end": 334
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 257,
                    "end": 334
                  }
                ],
                "start": 247,
                "end": 340
              },
              "abstract": false,
              "declare": false,
              "start": 199,
              "end": 340
            },
            "start": 192,
            "end": 341
          }
        ],
        "start": 186,
        "end": 343
      },
      "expression": false,
      "start": 77,
      "end": 343
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 343
}
```
