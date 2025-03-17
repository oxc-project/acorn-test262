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
      "type": "ClassDeclaration",
      "start": 76,
      "end": 356,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 95,
        "name": "TestComponent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 104,
        "end": 119,
        "object": {
          "type": "Identifier",
          "start": 104,
          "end": 109,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 110,
          "end": 119,
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
        "start": 158,
        "end": 356,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 164,
            "end": 228,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 183,
              "name": "defaultProps",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectExpression",
              "start": 186,
              "end": 228,
              "properties": [
                {
                  "type": "Property",
                  "start": 196,
                  "end": 222,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 196,
                    "end": 201,
                    "name": "isAny",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 203,
                    "end": 222,
                    "object": {
                      "type": "Identifier",
                      "start": 203,
                      "end": 216,
                      "name": "TestComponent",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 217,
                      "end": 222,
                      "name": "isAny",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 290,
            "end": 354,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 297,
              "end": 302,
              "name": "isAny",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 302,
              "end": 354,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 306,
                  "end": 314,
                  "name": "obj",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 309,
                    "end": 314,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 311,
                      "end": 314
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "name": "T",
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
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
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
                  "name": "isAny",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                            "name": "T",
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 133,
                        "end": 141,
                        "name": "obj",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 136,
                          "end": 141,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 138,
                            "end": 141
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 358,
      "end": 401,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 364,
          "end": 400,
          "id": {
            "type": "Identifier",
            "start": 364,
            "end": 374,
            "name": "TestRender",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 377,
            "end": 400,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "JSXElement",
              "start": 383,
              "end": 400,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 383,
                "end": 400,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 384,
                  "end": 397,
                  "name": "TestComponent"
                },
                "selfClosing": true,
                "typeArguments": null
              },
              "closingElement": null,
              "children": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
