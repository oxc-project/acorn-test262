__ESTREE_TEST__:PASS:
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
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 40,
        "end": 56,
        "expression": {
          "type": "Literal",
          "start": 48,
          "end": 55,
          "value": "react",
          "raw": "'react'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 59,
      "end": 193,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 75,
        "name": "BigGreeter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 84,
        "end": 99,
        "object": {
          "type": "Identifier",
          "start": 84,
          "end": 89,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 90,
          "end": 99,
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
        "start": 109,
        "end": 193,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 115,
            "end": 169,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 121,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 121,
              "end": 169,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "selfClosing": false,
                        "typeArguments": null
                      },
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
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 146,
                          "end": 156,
                          "value": "Default hi",
                          "raw": "Default hi"
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
          },
          {
            "type": "PropertyDefinition",
            "start": 174,
            "end": 191,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 174,
              "end": 182,
              "name": "greeting",
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
              "start": 182,
              "end": 190,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              }
            },
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
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 209,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 212,
            "end": 240,
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
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 213,
                "end": 223,
                "name": "BigGreeter"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 252,
            "end": 253,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 256,
            "end": 315,
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
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 274,
                          "end": 279,
                          "name": "input",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 286,
                                  "end": 290
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 291,
                                  "end": 300,
                                  "name": "textInput",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 303,
                                "end": 308,
                                "name": "input",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
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
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 320,
            "end": 321,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 324,
            "end": 354,
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
                    "value": "hi",
                    "raw": "\"hi\""
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 325,
                "end": 335,
                "name": "BigGreeter"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
