__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 267,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "raw": "'react'",
          "value": "react"
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 34,
      "end": 154,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 99,
        "end": 154,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 105,
            "end": 152,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 111,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 111,
              "end": 152,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 114,
                "end": 152,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 124,
                    "end": 145,
                    "argument": {
                      "type": "JSXElement",
                      "start": 131,
                      "end": 144,
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 136,
                          "end": 138,
                          "raw": "hi",
                          "value": "hi"
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 138,
                        "end": 144,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 140,
                          "end": 143,
                          "name": "div"
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 131,
                        "end": 136,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 132,
                          "end": 135,
                          "name": "div"
                        },
                        "selfClosing": false,
                        "typeArguments": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 42,
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 76,
        "end": 91,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 76,
          "end": 81,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 82,
          "end": 91,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 91,
        "end": 98,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 92,
            "end": 93,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 95,
            "end": 97,
            "members": []
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 42,
        "end": 67,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 43,
            "end": 66,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 53,
              "end": 66,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 55,
                  "end": 64,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 56,
                    "end": 64,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 58,
                      "end": 64
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 155,
      "end": 267,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 197,
        "end": 267,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 203,
            "end": 265,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 203,
              "end": 209,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 209,
              "end": 265,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 212,
                "end": 265,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 222,
                    "end": 259,
                    "argument": {
                      "type": "JSXElement",
                      "start": 229,
                      "end": 258,
                      "children": [],
                      "closingElement": null,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 229,
                        "end": 258,
                        "attributes": [
                          {
                            "type": "JSXSpreadAttribute",
                            "start": 233,
                            "end": 248,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 237,
                              "end": 247,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 237,
                                "end": 241
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 242,
                                "end": 247,
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          {
                            "type": "JSXAttribute",
                            "start": 249,
                            "end": 255,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 249,
                              "end": 250,
                              "name": "x"
                            },
                            "value": {
                              "type": "Literal",
                              "start": 251,
                              "end": 255,
                              "raw": "\"hi\"",
                              "value": "hi"
                            }
                          }
                        ],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 230,
                          "end": 232,
                          "name": "B1"
                        },
                        "selfClosing": true,
                        "typeArguments": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 162,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 174,
        "end": 189,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 174,
          "end": 179,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 180,
          "end": 189,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 189,
        "end": 196,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 190,
            "end": 191,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 190,
              "end": 191,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 193,
            "end": 195,
            "members": []
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 162,
        "end": 165,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 163,
            "end": 164,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
