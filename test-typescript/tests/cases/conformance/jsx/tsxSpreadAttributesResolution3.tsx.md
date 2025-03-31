__ESTREE_TEST__:PASS:
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
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 56,
        "name": "PoisonedProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 72,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 66,
                "end": 72
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 78,
            "end": 88,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 87,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 81,
                "end": 87
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
      "start": 92,
      "end": 206,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 106,
        "name": "Poisoned",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 115,
        "end": 130,
        "object": {
          "type": "Identifier",
          "start": 115,
          "end": 120,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 121,
          "end": 130,
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
        "start": 149,
        "end": 206,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 155,
            "end": 204,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 161,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 161,
              "end": 204,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "selfClosing": false,
                        "typeArguments": null
                      },
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
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 186,
                          "end": 191,
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
              "name": "PoisonedProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 214,
            "end": 217,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 229,
                  "end": 242,
                  "value": "hello world",
                  "raw": "\"hello world\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 248,
                "end": 252,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 249,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 251,
                  "end": 252,
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
      "start": 263,
      "end": 293,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 267,
          "end": 292,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 268,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 271,
            "end": 292,
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
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
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
      "start": 294,
      "end": 328,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 298,
          "end": 327,
          "id": {
            "type": "Identifier",
            "start": 298,
            "end": 299,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 302,
            "end": 327,
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
                    "value": "hi",
                    "raw": "\"hi\""
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
                      "value": 2,
                      "raw": "2"
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
