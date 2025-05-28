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
      "type": "VariableDeclaration",
      "start": 34,
      "end": 49,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 43,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 75,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 60,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 70,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 72,
                  "end": 73,
                  "value": 2,
                  "raw": "2"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 76,
      "end": 125,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 125,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 86,
            "decorators": [],
            "name": "obj3",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 96,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 98,
                  "end": 102,
                  "value": true,
                  "raw": "true"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 108,
                "end": 123,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 117,
                  "decorators": [],
                  "name": "overwrite",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 119,
                  "end": 123,
                  "value": "hi",
                  "raw": "\"hi\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "Prop",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "overwrite",
              "optional": false,
              "typeAnnotation": null
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 204,
        "end": 217,
        "decorators": [],
        "name": "OverWriteAttr",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 226,
        "end": 241,
        "object": {
          "type": "Identifier",
          "start": 226,
          "end": 231,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 232,
          "end": 241,
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
              "decorators": [],
              "name": "Prop",
              "optional": false,
              "typeAnnotation": null
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
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 252,
        "end": 309,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 258,
            "end": 307,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 258,
              "end": 264,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 264,
              "end": 307,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 285,
                          "end": 288,
                          "name": "div"
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 289,
                          "end": 294,
                          "value": "Hello",
                          "raw": "Hello"
                        }
                      ],
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 317,
      "end": 378,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 321,
          "end": 378,
          "id": {
            "type": "Identifier",
            "start": 321,
            "end": 322,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 325,
            "end": 378,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 325,
              "end": 378,
              "name": {
                "type": "JSXIdentifier",
                "start": 326,
                "end": 339,
                "name": "OverWriteAttr"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 340,
                  "end": 348,
                  "argument": {
                    "type": "Identifier",
                    "start": 344,
                    "end": 347,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null
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
      "start": 379,
      "end": 426,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 383,
          "end": 426,
          "id": {
            "type": "Identifier",
            "start": 383,
            "end": 385,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 388,
            "end": 426,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 388,
              "end": 426,
              "name": {
                "type": "JSXIdentifier",
                "start": 389,
                "end": 402,
                "name": "OverWriteAttr"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 403,
                  "end": 412,
                  "argument": {
                    "type": "Identifier",
                    "start": 407,
                    "end": 411,
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "obj3",
                    "optional": false,
                    "typeAnnotation": null
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
