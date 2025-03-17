__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 297,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "value": "react",
          "raw": "'react'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 34,
      "end": 170,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 42,
        "name": "B1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 92,
        "end": 107,
        "object": {
          "type": "Identifier",
          "start": 92,
          "end": 97,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 98,
          "end": 107,
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
        "start": 115,
        "end": 170,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 121,
            "end": 168,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 127,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 127,
              "end": 168,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 130,
                "end": 168,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 140,
                    "end": 161,
                    "argument": {
                      "type": "JSXElement",
                      "start": 147,
                      "end": 160,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 147,
                        "end": 152,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 148,
                          "end": 151,
                          "name": "div"
                        },
                        "selfClosing": false,
                        "typeArguments": null
                      },
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 154,
                        "end": 160,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 156,
                          "end": 159,
                          "name": "div"
                        }
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 152,
                          "end": 154,
                          "value": "hi",
                          "raw": "hi"
                        }
                      ]
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 42,
        "end": 83,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 43,
            "end": 81,
            "name": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 53,
              "end": 66,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 55,
                  "end": 64,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            "default": {
              "type": "TSTypeLiteral",
              "start": 69,
              "end": 81,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 71,
                  "end": 79,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 72,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 72,
                    "end": 79,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 73,
                      "end": 79
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 107,
        "end": 114,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 108,
            "end": 109,
            "typeName": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 111,
            "end": 113,
            "members": []
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 171,
      "end": 297,
      "id": {
        "type": "Identifier",
        "start": 177,
        "end": 178,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 190,
        "end": 205,
        "object": {
          "type": "Identifier",
          "start": 190,
          "end": 195,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 196,
          "end": 205,
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
        "start": 213,
        "end": 297,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 219,
            "end": 228,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 219,
              "end": 224,
              "name": "props",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 224,
              "end": 227,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 226,
                "end": 227,
                "typeName": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 233,
            "end": 295,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 239,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 239,
              "end": 295,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 242,
                "end": 295,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 252,
                    "end": 289,
                    "argument": {
                      "type": "JSXElement",
                      "start": 259,
                      "end": 288,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 259,
                        "end": 288,
                        "attributes": [
                          {
                            "type": "JSXSpreadAttribute",
                            "start": 263,
                            "end": 278,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 267,
                              "end": 277,
                              "object": {
                                "type": "ThisExpression",
                                "start": 267,
                                "end": 271
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 272,
                                "end": 277,
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
                            "start": 279,
                            "end": 285,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 279,
                              "end": 280,
                              "name": "x"
                            },
                            "value": {
                              "type": "Literal",
                              "start": 281,
                              "end": 285,
                              "value": "hi",
                              "raw": "\"hi\""
                            }
                          }
                        ],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 260,
                          "end": 262,
                          "name": "B1"
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 178,
        "end": 181,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 179,
            "end": 180,
            "name": {
              "type": "Identifier",
              "start": 179,
              "end": 180,
              "name": "U",
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 205,
        "end": 212,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 206,
            "end": 207,
            "typeName": {
              "type": "Identifier",
              "start": 206,
              "end": 207,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 209,
            "end": 211,
            "members": []
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
