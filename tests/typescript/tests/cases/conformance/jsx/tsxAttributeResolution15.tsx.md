__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 23,
          "end": 30
        },
        "start": 15,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BigGreeter",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 50
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 64
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 65,
          "end": 74
        },
        "optional": false,
        "computed": false,
        "start": 59,
        "end": 74
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 75,
            "end": 78
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 80,
            "end": 82
          }
        ],
        "start": 74,
        "end": 83
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 96
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 117,
                          "end": 120
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 116,
                        "end": 121
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "Default hi",
                          "raw": "Default hi",
                          "start": 121,
                          "end": 131
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 133,
                          "end": 136
                        },
                        "start": 131,
                        "end": 137
                      },
                      "start": 116,
                      "end": 137
                    },
                    "start": 109,
                    "end": 138
                  }
                ],
                "start": 99,
                "end": 144
              },
              "expression": false,
              "start": 96,
              "end": 144
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 90,
            "end": 144
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greeting",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 157
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 159,
                "end": 165
              },
              "start": 157,
              "end": 165
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 149,
            "end": 166
          }
        ],
        "start": 84,
        "end": 168
      },
      "abstract": false,
      "declare": false,
      "start": 34,
      "end": 168
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 184
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "BigGreeter",
                "start": 188,
                "end": 198
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "prop1",
                    "start": 199,
                    "end": 204
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 205,
                    "end": 212
                  },
                  "start": 199,
                  "end": 212
                }
              ],
              "selfClosing": true,
              "start": 187,
              "end": 215
            },
            "children": [],
            "closingElement": null,
            "start": 187,
            "end": 215
          },
          "definite": false,
          "start": 183,
          "end": 215
        }
      ],
      "declare": false,
      "start": 179,
      "end": 215
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 227,
            "end": 228
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "BigGreeter",
                "start": 232,
                "end": 242
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "ref",
                    "start": 243,
                    "end": 246
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "input",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 249,
                          "end": 254
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 261,
                                  "end": 265
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "textInput",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 266,
                                  "end": 275
                                },
                                "optional": false,
                                "computed": false,
                                "start": 261,
                                "end": 275
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "input",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 278,
                                "end": 283
                              },
                              "start": 261,
                              "end": 283
                            },
                            "directive": null,
                            "start": 261,
                            "end": 284
                          }
                        ],
                        "start": 259,
                        "end": 286
                      },
                      "id": null,
                      "generator": false,
                      "start": 248,
                      "end": 286
                    },
                    "start": 247,
                    "end": 287
                  },
                  "start": 243,
                  "end": 287
                }
              ],
              "selfClosing": true,
              "start": 231,
              "end": 290
            },
            "children": [],
            "closingElement": null,
            "start": 231,
            "end": 290
          },
          "definite": false,
          "start": 227,
          "end": 290
        }
      ],
      "declare": false,
      "start": 223,
      "end": 290
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 296
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "BigGreeter",
                "start": 300,
                "end": 310
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "data-extra",
                    "start": 311,
                    "end": 321
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 322,
                    "end": 326
                  },
                  "start": 311,
                  "end": 326
                }
              ],
              "selfClosing": true,
              "start": 299,
              "end": 329
            },
            "children": [],
            "closingElement": null,
            "start": 299,
            "end": 329
          },
          "definite": false,
          "start": 295,
          "end": 329
        }
      ],
      "declare": false,
      "start": 291,
      "end": 329
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 329
}
```
