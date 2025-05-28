__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 214,
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
      "type": "FunctionDeclaration",
      "start": 34,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 47,
        "decorators": [],
        "name": "SFC1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 48,
          "end": 67,
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 52,
            "end": 67,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 54,
              "end": 67,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 56,
                  "end": 65,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 57,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 57,
                    "end": 65,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 59,
                      "end": 65
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 69,
        "end": 101,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 75,
            "end": 99,
            "argument": {
              "type": "JSXElement",
              "start": 82,
              "end": 98,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 82,
                "end": 87,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 83,
                  "end": 86,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 87,
                  "end": 92,
                  "value": "hello",
                  "raw": "hello"
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 92,
                "end": 98,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 94,
                  "end": 97,
                  "name": "div"
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "EmptyStatement",
      "start": 101,
      "end": 102
    },
    {
      "type": "FunctionDeclaration",
      "start": 104,
      "end": 171,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 117,
        "decorators": [],
        "name": "SFC2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 118,
          "end": 138,
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 122,
            "end": 138,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 124,
              "end": 138,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 126,
                  "end": 136,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 127,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 127,
                    "end": 136,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 129,
                      "end": 136
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 140,
        "end": 171,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 146,
            "end": 169,
            "argument": {
              "type": "JSXElement",
              "start": 153,
              "end": 168,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 153,
                "end": 157,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 154,
                  "end": 156,
                  "name": "h1"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 157,
                  "end": 163,
                  "value": "World ",
                  "raw": "World "
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 163,
                "end": 168,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 165,
                  "end": 167,
                  "name": "h1"
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 173,
      "end": 200,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 199,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 184,
            "decorators": [],
            "name": "SFCComp",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 187,
            "end": 199,
            "left": {
              "type": "Identifier",
              "start": 187,
              "end": 191,
              "decorators": [],
              "name": "SFC1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 195,
              "end": 199,
              "decorators": [],
              "name": "SFC2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 201,
      "end": 214,
      "expression": {
        "type": "JSXElement",
        "start": 201,
        "end": 214,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 201,
          "end": 214,
          "name": {
            "type": "JSXIdentifier",
            "start": 202,
            "end": 209,
            "name": "SFCComp"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 210,
              "end": 211,
              "name": {
                "type": "JSXIdentifier",
                "start": 210,
                "end": 211,
                "name": "x"
              },
              "value": null
            }
          ],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
