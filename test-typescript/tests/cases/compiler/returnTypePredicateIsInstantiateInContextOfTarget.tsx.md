returnTypePredicateIsInstantiateInContextOfTarget.tsx
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
      "type": "ClassDeclaration",
      "start": 76,
      "end": 356,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 158,
        "end": 356,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 164,
            "end": 228,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 183,
              "decorators": [],
              "name": "defaultProps",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "ObjectExpression",
              "start": 186,
              "end": 228,
              "properties": [
                {
                  "type": "Property",
                  "start": 196,
                  "end": 222,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 196,
                    "end": 201,
                    "decorators": [],
                    "name": "isAny",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "MemberExpression",
                    "start": 203,
                    "end": 222,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 203,
                      "end": 216,
                      "decorators": [],
                      "name": "TestComponent",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 217,
                      "end": 222,
                      "decorators": [],
                      "name": "isAny",
                      "optional": false
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 290,
            "end": 354,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 297,
              "end": 302,
              "decorators": [],
              "name": "isAny",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 302,
              "end": 354,
              "async": false,
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
                      "raw": "true",
                      "value": true
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                  "asserts": false,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 320,
                    "decorators": [],
                    "name": "obj",
                    "optional": false
                  },
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
                        "optional": false
                      }
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 302,
                "end": 305,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 303,
                    "end": 304,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 303,
                      "end": 304,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 95,
        "decorators": [],
        "name": "TestComponent",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 104,
        "end": 119,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 104,
          "end": 109,
          "decorators": [],
          "name": "React",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 110,
          "end": 119,
          "decorators": [],
          "name": "Component",
          "optional": false
        }
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
                "key": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 127,
                  "decorators": [],
                  "name": "isAny",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 127,
                  "end": 154,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 129,
                    "end": 154,
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
                        "asserts": false,
                        "parameterName": {
                          "type": "Identifier",
                          "start": 146,
                          "end": 149,
                          "decorators": [],
                          "name": "obj",
                          "optional": false
                        },
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
                              "optional": false
                            }
                          }
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 129,
                      "end": 132,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 130,
                          "end": 131,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 130,
                            "end": 131,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          },
                          "out": false
                        }
                      ]
                    }
                  }
                }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 364,
            "end": 374,
            "decorators": [],
            "name": "TestRender",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 377,
            "end": 400,
            "async": false,
            "body": {
              "type": "JSXElement",
              "start": 383,
              "end": 400,
              "children": [],
              "closingElement": null,
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
                "selfClosing": true
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
