__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 280,
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
      "type": "TSDeclareFunction",
      "start": 34,
      "end": 88,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 60,
        "decorators": [],
        "name": "Component",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 64,
          "end": 72,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 69,
            "end": 72,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 71,
              "end": 72,
              "typeName": {
                "type": "Identifier",
                "start": 71,
                "end": 72,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 74,
        "end": 87,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 76,
          "end": 87,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 76,
            "end": 87,
            "left": {
              "type": "Identifier",
              "start": 76,
              "end": 79,
              "decorators": [],
              "name": "JSX",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 80,
              "end": 87,
              "decorators": [],
              "name": "Element",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 60,
        "end": 63,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 61,
            "end": 62,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
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
      "type": "VariableDeclaration",
      "start": 89,
      "end": 170,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 95,
          "end": 170,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 104,
            "decorators": [],
            "name": "decorator",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 107,
            "end": 170,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 130,
              "end": 170,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 136,
                  "end": 168,
                  "argument": {
                    "type": "JSXElement",
                    "start": 143,
                    "end": 167,
                    "children": [],
                    "closingElement": null,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 143,
                      "end": 167,
                      "attributes": [
                        {
                          "type": "JSXSpreadAttribute",
                          "start": 154,
                          "end": 164,
                          "argument": {
                            "type": "Identifier",
                            "start": 158,
                            "end": 163,
                            "decorators": [],
                            "name": "props",
                            "optional": false
                          }
                        }
                      ],
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 144,
                        "end": 153,
                        "name": "Component"
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
            "params": [
              {
                "type": "Identifier",
                "start": 120,
                "end": 128,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 125,
                  "end": 128,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 127,
                    "end": 128,
                    "typeName": {
                      "type": "Identifier",
                      "start": 127,
                      "end": 128,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 116,
              "end": 119,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 117,
                  "end": 118,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 118,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 172,
      "end": 280,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 280,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 188,
            "decorators": [],
            "name": "decorator1",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 191,
            "end": 280,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 234,
              "end": 280,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 240,
                  "end": 278,
                  "argument": {
                    "type": "JSXElement",
                    "start": 247,
                    "end": 277,
                    "children": [],
                    "closingElement": null,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 247,
                      "end": 277,
                      "attributes": [
                        {
                          "type": "JSXSpreadAttribute",
                          "start": 258,
                          "end": 268,
                          "argument": {
                            "type": "Identifier",
                            "start": 262,
                            "end": 267,
                            "decorators": [],
                            "name": "props",
                            "optional": false
                          }
                        },
                        {
                          "type": "JSXAttribute",
                          "start": 269,
                          "end": 275,
                          "name": {
                            "type": "JSXIdentifier",
                            "start": 269,
                            "end": 270,
                            "name": "x"
                          },
                          "value": {
                            "type": "Literal",
                            "start": 271,
                            "end": 275,
                            "raw": "\"hi\"",
                            "value": "hi"
                          }
                        }
                      ],
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 248,
                        "end": 257,
                        "name": "Component"
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
            "params": [
              {
                "type": "Identifier",
                "start": 224,
                "end": 232,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 229,
                  "end": 232,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 231,
                    "end": 232,
                    "typeName": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 232,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 200,
              "end": 223,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 201,
                  "end": 222,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "start": 211,
                    "end": 222,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 212,
                        "end": 221,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 212,
                          "end": 213,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 213,
                          "end": 221,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 215,
                            "end": 221
                          }
                        }
                      }
                    ]
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 202,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
