__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 404,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 44,
      "end": 88,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 51,
          "end": 56,
          "local": {
            "type": "Identifier",
            "start": 51,
            "end": 56,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 60,
          "end": 72,
          "imported": {
            "type": "Identifier",
            "start": 60,
            "end": 72,
            "decorators": [],
            "name": "ReactElement",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 60,
            "end": 72,
            "decorators": [],
            "name": "ReactElement",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 80,
        "end": 87,
        "value": "react",
        "raw": "\"react\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSDeclareFunction",
      "start": 90,
      "end": 186,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 115,
        "decorators": [],
        "name": "NotHappy",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 116,
          "end": 165,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 121,
            "end": 165,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 124,
              "end": 164,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 124,
                  "end": 143,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 126,
                      "end": 141,
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 126,
                        "end": 131,
                        "decorators": [],
                        "name": "fixed",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 132,
                        "end": 141,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 134,
                          "end": 141
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 146,
                  "end": 164,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 148,
                      "end": 162,
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 153,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 154,
                        "end": 162,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 156,
                          "end": 162
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 166,
        "end": 185,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 168,
          "end": 185,
          "typeName": {
            "type": "Identifier",
            "start": 168,
            "end": 180,
            "decorators": [],
            "name": "ReactElement",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 180,
            "end": 185,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 181,
                "end": 184
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 187,
      "end": 273,
      "id": {
        "type": "Identifier",
        "start": 204,
        "end": 209,
        "decorators": [],
        "name": "Happy",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 210,
          "end": 252,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 215,
            "end": 252,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 217,
              "end": 252,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 219,
                  "end": 235,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 224,
                    "decorators": [],
                    "name": "fixed",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 225,
                    "end": 234,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 227,
                      "end": 234
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 236,
                  "end": 250,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 236,
                    "end": 241,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 242,
                    "end": 250,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 244,
                      "end": 250
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 253,
        "end": 272,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 255,
          "end": 272,
          "typeName": {
            "type": "Identifier",
            "start": 255,
            "end": 267,
            "decorators": [],
            "name": "ReactElement",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 267,
            "end": 272,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 268,
                "end": 271
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 275,
      "end": 342,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 281,
          "end": 341,
          "id": {
            "type": "Identifier",
            "start": 281,
            "end": 293,
            "decorators": [],
            "name": "RootNotHappy",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 296,
            "end": 341,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "start": 303,
              "end": 340,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 303,
                "end": 340,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 304,
                  "end": 312,
                  "name": "NotHappy"
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "start": 313,
                    "end": 337,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 313,
                      "end": 324,
                      "name": "data-testid"
                    },
                    "value": {
                      "type": "Literal",
                      "start": 325,
                      "end": 337,
                      "value": "my-test-id",
                      "raw": "\"my-test-id\""
                    }
                  }
                ],
                "selfClosing": true
              },
              "children": [],
              "closingElement": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 343,
      "end": 404,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 349,
          "end": 403,
          "id": {
            "type": "Identifier",
            "start": 349,
            "end": 358,
            "decorators": [],
            "name": "RootHappy",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 361,
            "end": 403,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "start": 368,
              "end": 402,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 368,
                "end": 402,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 369,
                  "end": 374,
                  "name": "Happy"
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "start": 375,
                    "end": 399,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 375,
                      "end": 386,
                      "name": "data-testid"
                    },
                    "value": {
                      "type": "Literal",
                      "start": 387,
                      "end": 399,
                      "value": "my-test-id",
                      "raw": "\"my-test-id\""
                    }
                  }
                ],
                "selfClosing": true
              },
              "children": [],
              "closingElement": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
