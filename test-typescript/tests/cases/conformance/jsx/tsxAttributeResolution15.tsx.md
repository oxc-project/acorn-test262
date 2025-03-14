tsxAttributeResolution15.tsx
```json
{
  "type": "Program",
  "start": 25,
  "end": 354,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 25,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 37,
        "decorators": [],
        "name": "React",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 40,
        "end": 56,
        "expression": {
          "type": "Literal",
          "start": 48,
          "end": 55,
          "raw": "'react'",
          "value": "react"
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 59,
      "end": 193,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 109,
        "end": 193,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 115,
            "end": 169,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 121,
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
              "start": 121,
              "end": 169,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 124,
                "end": 169,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 134,
                    "end": 163,
                    "argument": {
                      "type": "JSXElement",
                      "start": 141,
                      "end": 162,
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 146,
                          "end": 156,
                          "raw": "Default hi",
                          "value": "Default hi"
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 156,
                        "end": 162,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 158,
                          "end": 161,
                          "name": "div"
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 141,
                        "end": 146,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 142,
                          "end": 145,
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
          },
          {
            "type": "PropertyDefinition",
            "start": 174,
            "end": 191,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 174,
              "end": 182,
              "decorators": [],
              "name": "greeting",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 190,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 75,
        "decorators": [],
        "name": "BigGreeter",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 84,
        "end": 99,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 84,
          "end": 89,
          "decorators": [],
          "name": "React",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 90,
          "end": 99,
          "decorators": [],
          "name": "Component",
          "optional": false
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 99,
        "end": 108,
        "params": [
          {
            "type": "TSTypeLiteral",
            "start": 100,
            "end": 103,
            "members": []
          },
          {
            "type": "TSTypeLiteral",
            "start": 105,
            "end": 107,
            "members": []
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 204,
      "end": 240,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 240,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 209,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 212,
            "end": 240,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 212,
              "end": 240,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 224,
                  "end": 237,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 224,
                    "end": 229,
                    "name": "prop1"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 230,
                    "end": 237,
                    "raw": "\"hello\"",
                    "value": "hello"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 213,
                "end": 223,
                "name": "BigGreeter"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 248,
      "end": 315,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 252,
          "end": 315,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 252,
            "end": 253,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 256,
            "end": 315,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 256,
              "end": 315,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 268,
                  "end": 312,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 268,
                    "end": 271,
                    "name": "ref"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 272,
                    "end": 312,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 273,
                      "end": 311,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 284,
                        "end": 311,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 286,
                            "end": 309,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 286,
                              "end": 308,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 286,
                                "end": 300,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 286,
                                  "end": 290
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 291,
                                  "end": 300,
                                  "decorators": [],
                                  "name": "textInput",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 303,
                                "end": 308,
                                "decorators": [],
                                "name": "input",
                                "optional": false
                              }
                            }
                          }
                        ]
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 274,
                          "end": 279,
                          "decorators": [],
                          "name": "input",
                          "optional": false
                        }
                      ]
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 257,
                "end": 267,
                "name": "BigGreeter"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 316,
      "end": 354,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 320,
          "end": 354,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 320,
            "end": 321,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 324,
            "end": 354,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 324,
              "end": 354,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 336,
                  "end": 351,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 336,
                    "end": 346,
                    "name": "data-extra"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 347,
                    "end": 351,
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 325,
                "end": 335,
                "name": "BigGreeter"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
