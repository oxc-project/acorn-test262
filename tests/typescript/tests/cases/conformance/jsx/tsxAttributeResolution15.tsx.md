__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 329,
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
      "end": 168,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 50,
        "decorators": [],
        "name": "BigGreeter",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 59,
        "end": 74,
        "object": {
          "type": "Identifier",
          "start": 59,
          "end": 64,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 65,
          "end": 74,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 74,
        "end": 83,
        "params": [
          {
            "type": "TSTypeLiteral",
            "start": 75,
            "end": 78,
            "members": []
          },
          {
            "type": "TSTypeLiteral",
            "start": 80,
            "end": 82,
            "members": []
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 84,
        "end": 168,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 90,
            "end": 144,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 96,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 96,
              "end": 144,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 99,
                "end": 144,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 109,
                    "end": 138,
                    "argument": {
                      "type": "JSXElement",
                      "start": 116,
                      "end": 137,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 116,
                        "end": 121,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 117,
                          "end": 120,
                          "name": "div"
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 121,
                          "end": 131,
                          "value": "Default hi",
                          "raw": "Default hi"
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 131,
                        "end": 137,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 133,
                          "end": 136,
                          "name": "div"
                        }
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 149,
            "end": 166,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 149,
              "end": 157,
              "decorators": [],
              "name": "greeting",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 165,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 159,
                "end": 165
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 179,
      "end": 215,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 215,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 184,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 187,
            "end": 215,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 187,
              "end": 215,
              "name": {
                "type": "JSXIdentifier",
                "start": 188,
                "end": 198,
                "name": "BigGreeter"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 199,
                  "end": 212,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 199,
                    "end": 204,
                    "name": "prop1"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 205,
                    "end": 212,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 223,
      "end": 290,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 227,
          "end": 290,
          "id": {
            "type": "Identifier",
            "start": 227,
            "end": 228,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 231,
            "end": 290,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 231,
              "end": 290,
              "name": {
                "type": "JSXIdentifier",
                "start": 232,
                "end": 242,
                "name": "BigGreeter"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 243,
                  "end": 287,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 243,
                    "end": 246,
                    "name": "ref"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 247,
                    "end": 287,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 248,
                      "end": 286,
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 249,
                          "end": 254,
                          "decorators": [],
                          "name": "input",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 259,
                        "end": 286,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 261,
                            "end": 284,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 261,
                              "end": 283,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 261,
                                "end": 275,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 261,
                                  "end": 265
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 266,
                                  "end": 275,
                                  "decorators": [],
                                  "name": "textInput",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 278,
                                "end": 283,
                                "decorators": [],
                                "name": "input",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
                      "id": null,
                      "generator": false
                    }
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 291,
      "end": 329,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 295,
          "end": 329,
          "id": {
            "type": "Identifier",
            "start": 295,
            "end": 296,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 299,
            "end": 329,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 299,
              "end": 329,
              "name": {
                "type": "JSXIdentifier",
                "start": 300,
                "end": 310,
                "name": "BigGreeter"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 311,
                  "end": 326,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 311,
                    "end": 321,
                    "name": "data-extra"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 322,
                    "end": 326,
                    "value": "hi",
                    "raw": "\"hi\""
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
