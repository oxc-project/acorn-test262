__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 274,
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
      "type": "TSDeclareFunction",
      "start": 34,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 60,
        "name": "Component",
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
          "start": 64,
          "end": 72,
          "name": "props",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 60,
        "end": 63,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 61,
            "end": 62,
            "name": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
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
              "name": "JSX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 80,
              "end": 87,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 104,
            "name": "decorator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 107,
            "end": 170,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 120,
                "end": 128,
                "name": "props",
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
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                            "name": "props",
                            "typeAnnotation": null,
                            "decorators": [],
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
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 116,
              "end": 119,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 117,
                  "end": 118,
                  "name": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 118,
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 172,
      "end": 274,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 274,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 188,
            "name": "decorator1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 191,
            "end": 274,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 224,
                "end": 232,
                "name": "props",
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
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 234,
              "end": 274,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 240,
                  "end": 272,
                  "argument": {
                    "type": "JSXElement",
                    "start": 247,
                    "end": 271,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 247,
                      "end": 271,
                      "attributes": [
                        {
                          "type": "JSXSpreadAttribute",
                          "start": 258,
                          "end": 268,
                          "argument": {
                            "type": "Identifier",
                            "start": 262,
                            "end": 267,
                            "name": "props",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ],
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 248,
                        "end": 257,
                        "name": "Component"
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
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 200,
              "end": 223,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 201,
                  "end": 222,
                  "name": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 202,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 212,
                          "end": 213,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 213,
                          "end": 221,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 215,
                            "end": 221
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
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
