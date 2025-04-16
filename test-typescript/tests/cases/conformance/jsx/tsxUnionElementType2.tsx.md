__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 245,
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
      "type": "FunctionDeclaration",
      "start": 59,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 72,
        "name": "SFC1",
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
          "start": 73,
          "end": 92,
          "name": "prop",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 77,
            "end": 92,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 79,
              "end": 92,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 81,
                  "end": 90,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 82,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 82,
                    "end": 90,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 84,
                      "end": 90
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 94,
        "end": 126,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 100,
            "end": 124,
            "argument": {
              "type": "JSXElement",
              "start": 107,
              "end": 123,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 107,
                "end": 112,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 108,
                  "end": 111,
                  "name": "div"
                },
                "selfClosing": false,
                "typeArguments": null
              },
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 117,
                "end": 123,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 119,
                  "end": 122,
                  "name": "div"
                }
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 112,
                  "end": 117,
                  "value": "hello",
                  "raw": "hello"
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
    {
      "type": "EmptyStatement",
      "start": 126,
      "end": 127
    },
    {
      "type": "FunctionDeclaration",
      "start": 129,
      "end": 196,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 142,
        "name": "SFC2",
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
          "start": 143,
          "end": 163,
          "name": "prop",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 147,
            "end": 163,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 149,
              "end": 163,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 151,
                  "end": 161,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 152,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 152,
                    "end": 161,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 154,
                      "end": 161
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 165,
        "end": 196,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 171,
            "end": 194,
            "argument": {
              "type": "JSXElement",
              "start": 178,
              "end": 193,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 178,
                "end": 182,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 179,
                  "end": 181,
                  "name": "h1"
                },
                "selfClosing": false,
                "typeArguments": null
              },
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 188,
                "end": 193,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 190,
                  "end": 192,
                  "name": "h1"
                }
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 182,
                  "end": 188,
                  "value": "World ",
                  "raw": "World "
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
    {
      "type": "VariableDeclaration",
      "start": 198,
      "end": 225,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 202,
          "end": 224,
          "id": {
            "type": "Identifier",
            "start": 202,
            "end": 209,
            "name": "SFCComp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 212,
            "end": 224,
            "left": {
              "type": "Identifier",
              "start": 212,
              "end": 216,
              "name": "SFC1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 220,
              "end": 224,
              "name": "SFC2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 226,
      "end": 245,
      "expression": {
        "type": "JSXElement",
        "start": 226,
        "end": 245,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 226,
          "end": 245,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 235,
              "end": 243,
              "name": {
                "type": "JSXIdentifier",
                "start": 235,
                "end": 236,
                "name": "x"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 237,
                "end": 243,
                "expression": {
                  "type": "Literal",
                  "start": 238,
                  "end": 242,
                  "value": "hi",
                  "raw": "\"hi\""
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 227,
            "end": 234,
            "name": "SFCComp"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
