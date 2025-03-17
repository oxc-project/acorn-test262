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
      "end": 154,
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
        "start": 76,
        "end": 91,
        "object": {
          "type": "Identifier",
          "start": 76,
          "end": 81,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 82,
          "end": 91,
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
        "start": 99,
        "end": 154,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 105,
            "end": 152,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 111,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 111,
              "end": 152,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      },
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
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 136,
                          "end": 138,
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
        "end": 67,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 43,
            "end": 66,
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
        "start": 91,
        "end": 98,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 92,
            "end": 93,
            "typeName": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 95,
            "end": 97,
            "members": []
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 155,
      "end": 267,
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 162,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 174,
        "end": 189,
        "object": {
          "type": "Identifier",
          "start": 174,
          "end": 179,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 180,
          "end": 189,
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
        "start": 197,
        "end": 267,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 203,
            "end": 265,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 203,
              "end": 209,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 209,
              "end": 265,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                              "object": {
                                "type": "ThisExpression",
                                "start": 237,
                                "end": 241
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 242,
                                "end": 247,
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
                              "value": "hi",
                              "raw": "\"hi\""
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
        "start": 162,
        "end": 165,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 163,
            "end": 164,
            "name": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
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
        "start": 189,
        "end": 196,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 190,
            "end": 191,
            "typeName": {
              "type": "Identifier",
              "start": 190,
              "end": 191,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 193,
            "end": 195,
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
