file.tsx
```json
{
  "type": "Program",
  "start": 0,
  "end": 283,
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
        "optional": false
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
      "end": 170,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 115,
        "end": 170,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 121,
            "end": 168,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 127,
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
              "start": 127,
              "end": 168,
              "async": false,
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
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 152,
                          "end": 154,
                          "raw": "hi",
                          "value": "hi"
                        }
                      ],
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
                        "selfClosing": false
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
        "start": 40,
        "end": 42,
        "decorators": [],
        "name": "B1",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 92,
        "end": 107,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 92,
          "end": 97,
          "decorators": [],
          "name": "React",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 98,
          "end": 107,
          "decorators": [],
          "name": "Component",
          "optional": false
        }
      },
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
              "decorators": [],
              "name": "T",
              "optional": false
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 111,
            "end": 113,
            "members": []
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 42,
        "end": 83,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 43,
            "end": 81,
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "decorators": [],
                    "name": "x",
                    "optional": false
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
                  "key": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 72,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 72,
                    "end": 79,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 73,
                      "end": 79
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 171,
      "end": 283,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 213,
        "end": 283,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 219,
            "end": 281,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 219,
              "end": 225,
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
              "start": 225,
              "end": 281,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 228,
                "end": 281,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 238,
                    "end": 275,
                    "argument": {
                      "type": "JSXElement",
                      "start": 245,
                      "end": 274,
                      "children": [],
                      "closingElement": null,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 245,
                        "end": 274,
                        "attributes": [
                          {
                            "type": "JSXSpreadAttribute",
                            "start": 249,
                            "end": 264,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 253,
                              "end": 263,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 253,
                                "end": 257
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 258,
                                "end": 263,
                                "decorators": [],
                                "name": "props",
                                "optional": false
                              }
                            }
                          },
                          {
                            "type": "JSXAttribute",
                            "start": 265,
                            "end": 271,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 265,
                              "end": 266,
                              "name": "x"
                            },
                            "value": {
                              "type": "Literal",
                              "start": 267,
                              "end": 271,
                              "raw": "\"hi\"",
                              "value": "hi"
                            }
                          }
                        ],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 246,
                          "end": 248,
                          "name": "B1"
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
        "start": 177,
        "end": 178,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 190,
        "end": 205,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 190,
          "end": 195,
          "decorators": [],
          "name": "React",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 196,
          "end": 205,
          "decorators": [],
          "name": "Component",
          "optional": false
        }
      },
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
              "decorators": [],
              "name": "U",
              "optional": false
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 209,
            "end": 211,
            "members": []
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 178,
        "end": 181,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 179,
            "end": 180,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 179,
              "end": 180,
              "decorators": [],
              "name": "U",
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
