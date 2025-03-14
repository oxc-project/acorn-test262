reactReadonlyHOCAssignabilityReal.tsx
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 67,
        "end": 74,
        "raw": "\"react\"",
        "value": "react"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 51,
          "end": 61,
          "local": {
            "type": "Identifier",
            "start": 56,
            "end": 61,
            "decorators": [],
            "name": "React",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 77,
      "end": 343,
      "async": false,
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
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 247,
                "end": 340,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 257,
                    "end": 334,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 257,
                      "end": 263,
                      "decorators": [],
                      "name": "render",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 263,
                      "end": 334,
                      "async": false,
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
                              "children": [],
                              "closingElement": null,
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
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 298,
                                        "end": 302
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 303,
                                        "end": 308,
                                        "decorators": [],
                                        "name": "props",
                                        "optional": false
                                      }
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
                                      "raw": "\"Matt\"",
                                      "value": "Matt"
                                    }
                                  }
                                ],
                                "name": {
                                  "type": "JSXIdentifier",
                                  "start": 288,
                                  "end": 293,
                                  "name": "Inner"
                                },
                                "selfClosing": true
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 205,
                "end": 219,
                "decorators": [],
                "name": "OuterComponent",
                "optional": false
              },
              "implements": [],
              "superClass": {
                "type": "MemberExpression",
                "start": 228,
                "end": 243,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 233,
                  "decorators": [],
                  "name": "React",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 243,
                  "decorators": [],
                  "name": "Component",
                  "optional": false
                }
              },
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
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 108,
        "decorators": [],
        "name": "myHigherOrderComponent",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 112,
          "end": 159,
          "decorators": [],
          "name": "Inner",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 117,
            "end": 159,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 119,
              "end": 159,
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
                          "decorators": [],
                          "name": "P",
                          "optional": false
                        }
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
                            "key": {
                              "type": "Identifier",
                              "start": 145,
                              "end": 149,
                              "decorators": [],
                              "name": "name",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 149,
                              "end": 157,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 151,
                                "end": 157
                              }
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "TSQualifiedName",
                "start": 119,
                "end": 139,
                "left": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 124,
                  "decorators": [],
                  "name": "React",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 139,
                  "decorators": [],
                  "name": "ComponentClass",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 160,
        "end": 185,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 162,
          "end": 185,
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
                  "decorators": [],
                  "name": "P",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "TSQualifiedName",
            "start": 162,
            "end": 182,
            "left": {
              "type": "Identifier",
              "start": 162,
              "end": 167,
              "decorators": [],
              "name": "React",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 168,
              "end": 182,
              "decorators": [],
              "name": "ComponentClass",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 108,
        "end": 111,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 109,
            "end": 110,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
