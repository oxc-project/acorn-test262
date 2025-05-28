__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 401,
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
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 76,
      "end": 356,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 95,
        "decorators": [],
        "name": "TestComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 104,
        "end": 119,
        "object": {
          "type": "Identifier",
          "start": 104,
          "end": 109,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 110,
          "end": 119,
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
        "start": 119,
        "end": 157,
        "params": [
          {
            "type": "TSTypeLiteral",
            "start": 120,
            "end": 156,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 122,
                "end": 154,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 127,
                  "decorators": [],
                  "name": "isAny",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 127,
                  "end": 154,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 129,
                    "end": 154,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 129,
                      "end": 132,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 130,
                          "end": 131,
                          "name": {
                            "type": "Identifier",
                            "start": 130,
                            "end": 131,
                            "decorators": [],
                            "name": "T",
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 133,
                        "end": 141,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 136,
                          "end": 141,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 138,
                            "end": 141
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 143,
                      "end": 154,
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "start": 146,
                        "end": 154,
                        "parameterName": {
                          "type": "Identifier",
                          "start": 146,
                          "end": 149,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 153,
                          "end": 154,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 153,
                            "end": 154,
                            "typeName": {
                              "type": "Identifier",
                              "start": 153,
                              "end": 154,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 158,
        "end": 356,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 164,
            "end": 228,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 183,
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 186,
              "end": 228,
              "properties": [
                {
                  "type": "Property",
                  "start": 196,
                  "end": 222,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 196,
                    "end": 201,
                    "decorators": [],
                    "name": "isAny",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 203,
                    "end": 222,
                    "object": {
                      "type": "Identifier",
                      "start": 203,
                      "end": 216,
                      "decorators": [],
                      "name": "TestComponent",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 217,
                      "end": 222,
                      "decorators": [],
                      "name": "isAny",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 290,
            "end": 354,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 297,
              "end": 302,
              "decorators": [],
              "name": "isAny",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 302,
              "end": 354,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 302,
                "end": 305,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 303,
                    "end": 304,
                    "name": {
                      "type": "Identifier",
                      "start": 303,
                      "end": 304,
                      "decorators": [],
                      "name": "T",
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 306,
                  "end": 314,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 309,
                    "end": 314,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 311,
                      "end": 314
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 315,
                "end": 325,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 317,
                  "end": 325,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 320,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 324,
                    "end": 325,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 324,
                      "end": 325,
                      "typeName": {
                        "type": "Identifier",
                        "start": 324,
                        "end": 325,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 326,
                "end": 354,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 336,
                    "end": 348,
                    "argument": {
                      "type": "Literal",
                      "start": 343,
                      "end": 347,
                      "value": true,
                      "raw": "true"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 358,
      "end": 401,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 364,
          "end": 400,
          "id": {
            "type": "Identifier",
            "start": 364,
            "end": 374,
            "decorators": [],
            "name": "TestRender",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 377,
            "end": 400,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "start": 383,
              "end": 400,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 383,
                "end": 400,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 384,
                  "end": 397,
                  "name": "TestComponent"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true
              },
              "children": [],
              "closingElement": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
