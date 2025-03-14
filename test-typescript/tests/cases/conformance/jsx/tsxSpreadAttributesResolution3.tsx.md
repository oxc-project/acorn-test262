file.tsx
```json
{
  "type": "Program",
  "start": 0,
  "end": 328,
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
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 90,
      "body": {
        "type": "TSInterfaceBody",
        "start": 57,
        "end": 90,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 63,
            "end": 73,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 72,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 66,
                "end": 72
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 78,
            "end": 88,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 87,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 81,
                "end": 87
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 56,
        "decorators": [],
        "name": "PoisonedProp",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 92,
      "end": 206,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 149,
        "end": 206,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 155,
            "end": 204,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 161,
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
              "start": 161,
              "end": 204,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 164,
                "end": 204,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 174,
                    "end": 198,
                    "argument": {
                      "type": "JSXElement",
                      "start": 181,
                      "end": 197,
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 186,
                          "end": 191,
                          "raw": "Hello",
                          "value": "Hello"
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 191,
                        "end": 197,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 193,
                          "end": 196,
                          "name": "div"
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 181,
                        "end": 186,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 182,
                          "end": 185,
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
        "start": 98,
        "end": 106,
        "decorators": [],
        "name": "Poisoned",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 115,
        "end": 130,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 115,
          "end": 120,
          "decorators": [],
          "name": "React",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 121,
          "end": 130,
          "decorators": [],
          "name": "Component",
          "optional": false
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 130,
        "end": 148,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 131,
            "end": 143,
            "typeName": {
              "type": "Identifier",
              "start": 131,
              "end": 143,
              "decorators": [],
              "name": "PoisonedProp",
              "optional": false
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 145,
            "end": 147,
            "members": []
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 208,
      "end": 255,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 214,
          "end": 254,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 214,
            "end": 217,
            "decorators": [],
            "name": "obj",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 220,
            "end": 254,
            "properties": [
              {
                "type": "Property",
                "start": 226,
                "end": 242,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 229,
                  "end": 242,
                  "raw": "\"hello world\"",
                  "value": "hello world"
                }
              },
              {
                "type": "Property",
                "start": 248,
                "end": 252,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 249,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 251,
                  "end": 252,
                  "raw": "2",
                  "value": 2
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 263,
      "end": 293,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 267,
          "end": 292,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 268,
            "decorators": [],
            "name": "p",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 271,
            "end": 292,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 271,
              "end": 292,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 281,
                  "end": 289,
                  "argument": {
                    "type": "Identifier",
                    "start": 285,
                    "end": 288,
                    "decorators": [],
                    "name": "obj",
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 272,
                "end": 280,
                "name": "Poisoned"
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
      "start": 294,
      "end": 328,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 298,
          "end": 327,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 298,
            "end": 299,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 302,
            "end": 327,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 302,
              "end": 327,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 312,
                  "end": 318,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 312,
                    "end": 313,
                    "name": "x"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 314,
                    "end": 318,
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 319,
                  "end": 324,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 319,
                    "end": 320,
                    "name": "y"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 321,
                    "end": 324,
                    "expression": {
                      "type": "Literal",
                      "start": 322,
                      "end": 323,
                      "raw": "2",
                      "value": 2
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 303,
                "end": 311,
                "name": "Poisoned"
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
