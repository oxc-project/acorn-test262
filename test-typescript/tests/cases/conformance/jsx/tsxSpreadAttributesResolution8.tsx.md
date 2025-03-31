__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 426,
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
      "type": "VariableDeclaration",
      "start": 34,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 43,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 46,
            "end": 48,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 60,
            "name": "obj1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 63,
            "end": 75,
            "properties": [
              {
                "type": "Property",
                "start": 69,
                "end": 73,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 70,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 72,
                  "end": 73,
                  "value": 2,
                  "raw": "2"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 76,
      "end": 125,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 125,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 86,
            "name": "obj3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 89,
            "end": 125,
            "properties": [
              {
                "type": "Property",
                "start": 95,
                "end": 102,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 96,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 98,
                  "end": 102,
                  "value": true,
                  "raw": "true"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 108,
                "end": 123,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 117,
                  "name": "overwrite",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 119,
                  "end": 123,
                  "value": "hi",
                  "raw": "\"hi\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 127,
      "end": 196,
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 141,
        "name": "Prop",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 142,
        "end": 196,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 148,
            "end": 157,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 148,
              "end": 149,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 157,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 151,
                "end": 157
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 162,
            "end": 172,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 163,
              "end": 172,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 165,
                "end": 172
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 177,
            "end": 194,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 186,
              "name": "overwrite",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 186,
              "end": 194,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 188,
                "end": 194
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 198,
      "end": 309,
      "id": {
        "type": "Identifier",
        "start": 204,
        "end": 217,
        "name": "OverWriteAttr",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 226,
        "end": 241,
        "object": {
          "type": "Identifier",
          "start": 226,
          "end": 231,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 232,
          "end": 241,
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
        "start": 252,
        "end": 309,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 258,
            "end": 307,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 258,
              "end": 264,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 264,
              "end": 307,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 267,
                "end": 307,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 277,
                    "end": 301,
                    "argument": {
                      "type": "JSXElement",
                      "start": 284,
                      "end": 300,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 284,
                        "end": 289,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 285,
                          "end": 288,
                          "name": "div"
                        },
                        "selfClosing": false,
                        "typeArguments": null
                      },
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 294,
                        "end": 300,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 296,
                          "end": 299,
                          "name": "div"
                        }
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 289,
                          "end": 294,
                          "value": "Hello",
                          "raw": "Hello"
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 241,
        "end": 251,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 242,
            "end": 246,
            "typeName": {
              "type": "Identifier",
              "start": 242,
              "end": 246,
              "name": "Prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 248,
            "end": 250,
            "members": []
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 317,
      "end": 378,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 321,
          "end": 378,
          "id": {
            "type": "Identifier",
            "start": 321,
            "end": 322,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 325,
            "end": 378,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 325,
              "end": 378,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 340,
                  "end": 348,
                  "argument": {
                    "type": "Identifier",
                    "start": 344,
                    "end": 347,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 349,
                  "end": 350,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 349,
                    "end": 350,
                    "name": "y"
                  },
                  "value": null
                },
                {
                  "type": "JSXAttribute",
                  "start": 351,
                  "end": 365,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 351,
                    "end": 360,
                    "name": "overwrite"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 361,
                    "end": 365,
                    "value": "hi",
                    "raw": "\"hi\""
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 366,
                  "end": 375,
                  "argument": {
                    "type": "Identifier",
                    "start": 370,
                    "end": 374,
                    "name": "obj1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 326,
                "end": 339,
                "name": "OverWriteAttr"
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
      "start": 379,
      "end": 426,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 383,
          "end": 426,
          "id": {
            "type": "Identifier",
            "start": 383,
            "end": 385,
            "name": "x1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 388,
            "end": 426,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 388,
              "end": 426,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 403,
                  "end": 412,
                  "argument": {
                    "type": "Identifier",
                    "start": 407,
                    "end": 411,
                    "name": "obj1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 413,
                  "end": 422,
                  "argument": {
                    "type": "Identifier",
                    "start": 417,
                    "end": 421,
                    "name": "obj3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 389,
                "end": 402,
                "name": "OverWriteAttr"
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
