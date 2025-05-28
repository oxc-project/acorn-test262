__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 393,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 73,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 25,
            "end": 71,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 42,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 43,
              "end": 71,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 53,
                  "end": 65,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 56,
                    "decorators": [],
                    "name": "div",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 56,
                    "end": 64,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 58,
                      "end": 64
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 74,
      "end": 200,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 97,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 98,
        "end": 200,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 104,
            "end": 198,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 110,
              "end": 119,
              "decorators": [],
              "name": "Component",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 119,
              "end": 125,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 120,
                  "end": 121,
                  "name": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 121,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 123,
                  "end": 124,
                  "name": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 124,
                    "decorators": [],
                    "name": "S",
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
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 126,
              "end": 198,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 136,
                  "end": 174,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 147,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 147,
                    "end": 174,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 148,
                        "end": 157,
                        "decorators": [],
                        "name": "props",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 154,
                          "end": 157,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 156,
                            "end": 157,
                            "typeName": {
                              "type": "Identifier",
                              "start": 156,
                              "end": 157,
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 159,
                        "end": 172,
                        "decorators": [],
                        "name": "context",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 167,
                          "end": 172,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 169,
                            "end": 172
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": null,
                    "expression": false
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 183,
                  "end": 192,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 188,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 188,
                    "end": 191,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 190,
                      "end": 191,
                      "typeName": {
                        "type": "Identifier",
                        "start": 190,
                        "end": 191,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 202,
      "end": 393,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 209,
        "end": 393,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 215,
          "end": 227,
          "decorators": [],
          "name": "ShortDetails",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "MemberExpression",
          "start": 236,
          "end": 251,
          "object": {
            "type": "Identifier",
            "start": 236,
            "end": 241,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 242,
            "end": 251,
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 251,
          "end": 271,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 252,
              "end": 266,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 254,
                  "end": 264,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 254,
                    "end": 256,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 256,
                    "end": 264,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 258,
                      "end": 264
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            {
              "type": "TSTypeLiteral",
              "start": 268,
              "end": 270,
              "members": []
            }
          ]
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 272,
          "end": 393,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 278,
              "end": 391,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 285,
                "end": 291,
                "decorators": [],
                "name": "render",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 291,
                "end": 391,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 293,
                  "end": 306,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 295,
                    "end": 306,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 295,
                      "end": 306,
                      "left": {
                        "type": "Identifier",
                        "start": 295,
                        "end": 298,
                        "decorators": [],
                        "name": "JSX",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 299,
                        "end": 306,
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
                  "start": 307,
                  "end": 391,
                  "body": [
                    {
                      "type": "IfStatement",
                      "start": 317,
                      "end": 385,
                      "test": {
                        "type": "BinaryExpression",
                        "start": 321,
                        "end": 338,
                        "left": {
                          "type": "MemberExpression",
                          "start": 321,
                          "end": 334,
                          "object": {
                            "type": "MemberExpression",
                            "start": 321,
                            "end": 331,
                            "object": {
                              "type": "ThisExpression",
                              "start": 321,
                              "end": 325
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 326,
                              "end": 331,
                              "decorators": [],
                              "name": "props",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 332,
                            "end": 334,
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "operator": "<",
                        "right": {
                          "type": "Literal",
                          "start": 337,
                          "end": 338,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 340,
                        "end": 385,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 354,
                            "end": 375,
                            "argument": {
                              "type": "JSXElement",
                              "start": 362,
                              "end": 373,
                              "openingElement": {
                                "type": "JSXOpeningElement",
                                "start": 362,
                                "end": 367,
                                "name": {
                                  "type": "JSXIdentifier",
                                  "start": 363,
                                  "end": 366,
                                  "name": "div"
                                },
                                "typeArguments": null,
                                "attributes": [],
                                "selfClosing": false
                              },
                              "children": [],
                              "closingElement": {
                                "type": "JSXClosingElement",
                                "start": 367,
                                "end": 373,
                                "name": {
                                  "type": "JSXIdentifier",
                                  "start": 369,
                                  "end": 372,
                                  "name": "div"
                                }
                              }
                            }
                          }
                        ]
                      },
                      "alternate": null
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
