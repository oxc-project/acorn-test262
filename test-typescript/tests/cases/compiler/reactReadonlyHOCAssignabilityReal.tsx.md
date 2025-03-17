__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 343,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 44,
      "end": 75,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 51,
          "end": 61,
          "local": {
            "type": "Identifier",
            "start": 56,
            "end": 61,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 67,
        "end": 74,
        "value": "react",
        "raw": "\"react\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 77,
      "end": 343,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 108,
        "name": "myHigherOrderComponent",
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
          "start": 112,
          "end": 159,
          "name": "Inner",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 117,
            "end": 159,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 119,
              "end": 159,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 119,
                "end": 139,
                "left": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 124,
                  "name": "React",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 139,
                  "name": "ComponentClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 139,
                "end": 159,
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "start": 140,
                    "end": 158,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 140,
                        "end": 141,
                        "typeName": {
                          "type": "Identifier",
                          "start": 140,
                          "end": 141,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeLiteral",
                        "start": 144,
                        "end": 158,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 145,
                            "end": 157,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 145,
                              "end": 149,
                              "name": "name",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 149,
                              "end": 157,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 151,
                                "end": 157
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 186,
        "end": 343,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 192,
            "end": 341,
            "argument": {
              "type": "ClassExpression",
              "start": 199,
              "end": 340,
              "id": {
                "type": "Identifier",
                "start": 205,
                "end": 219,
                "name": "OuterComponent",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "MemberExpression",
                "start": 228,
                "end": 243,
                "object": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 233,
                  "name": "React",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 243,
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
                "start": 247,
                "end": 340,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 257,
                    "end": 334,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 257,
                      "end": 263,
                      "name": "render",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 263,
                      "end": 334,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 266,
                        "end": 334,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 280,
                            "end": 324,
                            "argument": {
                              "type": "JSXElement",
                              "start": 287,
                              "end": 323,
                              "openingElement": {
                                "type": "JSXOpeningElement",
                                "start": 287,
                                "end": 323,
                                "attributes": [
                                  {
                                    "type": "JSXSpreadAttribute",
                                    "start": 294,
                                    "end": 309,
                                    "argument": {
                                      "type": "MemberExpression",
                                      "start": 298,
                                      "end": 308,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 298,
                                        "end": 302
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 303,
                                        "end": 308,
                                        "name": "props",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    }
                                  },
                                  {
                                    "type": "JSXAttribute",
                                    "start": 310,
                                    "end": 321,
                                    "name": {
                                      "type": "JSXIdentifier",
                                      "start": 310,
                                      "end": 314,
                                      "name": "name"
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "start": 315,
                                      "end": 321,
                                      "value": "Matt",
                                      "raw": "\"Matt\""
                                    }
                                  }
                                ],
                                "name": {
                                  "type": "JSXIdentifier",
                                  "start": 288,
                                  "end": 293,
                                  "name": "Inner"
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
                "start": 243,
                "end": 246,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 244,
                    "end": 245,
                    "typeName": {
                      "type": "Identifier",
                      "start": 244,
                      "end": 245,
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
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 108,
        "end": 111,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 109,
            "end": 110,
            "name": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
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
        "start": 160,
        "end": 185,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 162,
          "end": 185,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 162,
            "end": 182,
            "left": {
              "type": "Identifier",
              "start": 162,
              "end": 167,
              "name": "React",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 168,
              "end": 182,
              "name": "ComponentClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 182,
            "end": 185,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 183,
                "end": 184,
                "typeName": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 184,
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
