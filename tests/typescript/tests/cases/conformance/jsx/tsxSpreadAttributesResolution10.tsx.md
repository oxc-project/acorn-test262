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
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OptionProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 54
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 65,
                  "end": 66
                },
                "start": 65,
                "end": 66
              },
              "start": 63,
              "end": 66
            },
            "accessibility": null,
            "static": false,
            "start": 61,
            "end": 66
          }
        ],
        "start": 55,
        "end": 68
      },
      "declare": false,
      "start": 34,
      "end": 68
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Opt",
        "optional": false,
        "typeAnnotation": null,
        "start": 76,
        "end": 79
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
          "start": 88,
          "end": 93
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 94,
          "end": 103
        },
        "optional": false,
        "computed": false,
        "start": 88,
        "end": 103
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "OptionProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 114
            },
            "typeArguments": null,
            "start": 104,
            "end": 114
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 116,
            "end": 118
          }
        ],
        "start": 103,
        "end": 119
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
              "start": 126,
              "end": 132
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
                          "start": 153,
                          "end": 156
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 152,
                        "end": 157
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "Hello",
                          "raw": "Hello",
                          "start": 157,
                          "end": 162
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 164,
                          "end": 167
                        },
                        "start": 162,
                        "end": 168
                      },
                      "start": 152,
                      "end": 168
                    },
                    "start": 145,
                    "end": 169
                  }
                ],
                "start": 135,
                "end": 175
              },
              "expression": false,
              "start": 132,
              "end": 175
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 126,
            "end": 175
          }
        ],
        "start": 120,
        "end": 177
      },
      "abstract": false,
      "declare": false,
      "start": 70,
      "end": 177
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 190,
                  "end": 200
                },
                "typeArguments": null,
                "start": 190,
                "end": 200
              },
              "start": 188,
              "end": 200
            },
            "start": 185,
            "end": 200
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 203,
            "end": 205
          },
          "definite": false,
          "start": 185,
          "end": 205
        }
      ],
      "declare": false,
      "start": 179,
      "end": 206
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 219,
                  "end": 229
                },
                "typeArguments": null,
                "start": 219,
                "end": 229
              },
              "start": 217,
              "end": 229
            },
            "start": 213,
            "end": 229
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 238,
                  "end": 239
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 241,
                  "end": 242
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 238,
                "end": 242
              }
            ],
            "start": 232,
            "end": 244
          },
          "definite": false,
          "start": 213,
          "end": 244
        }
      ],
      "declare": false,
      "start": 207,
      "end": 244
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 260
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Opt",
                "start": 264,
                "end": 267
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 272,
                    "end": 275
                  },
                  "start": 268,
                  "end": 276
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 277,
                    "end": 278
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 280,
                      "end": 281
                    },
                    "start": 279,
                    "end": 282
                  },
                  "start": 277,
                  "end": 282
                }
              ],
              "selfClosing": true,
              "start": 263,
              "end": 284
            },
            "children": [],
            "closingElement": null,
            "start": 263,
            "end": 284
          },
          "definite": false,
          "start": 259,
          "end": 284
        }
      ],
      "declare": false,
      "start": 255,
      "end": 285
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
            "name": "y1",
            "optional": false,
            "typeAnnotation": null,
            "start": 290,
            "end": 292
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Opt",
                "start": 296,
                "end": 299
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 304,
                    "end": 308
                  },
                  "start": 300,
                  "end": 309
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 310,
                    "end": 311
                  },
                  "value": {
                    "type": "Literal",
                    "value": "Hi",
                    "raw": "\"Hi\"",
                    "start": 312,
                    "end": 316
                  },
                  "start": 310,
                  "end": 316
                }
              ],
              "selfClosing": true,
              "start": 295,
              "end": 318
            },
            "children": [],
            "closingElement": null,
            "start": 295,
            "end": 318
          },
          "definite": false,
          "start": 290,
          "end": 318
        }
      ],
      "declare": false,
      "start": 286,
      "end": 319
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
            "name": "y2",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 326
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Opt",
                "start": 330,
                "end": 333
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 338,
                    "end": 342
                  },
                  "start": 334,
                  "end": 343
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 344,
                    "end": 345
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 347,
                      "end": 348
                    },
                    "start": 346,
                    "end": 349
                  },
                  "start": 344,
                  "end": 349
                }
              ],
              "selfClosing": true,
              "start": 329,
              "end": 351
            },
            "children": [],
            "closingElement": null,
            "start": 329,
            "end": 351
          },
          "definite": false,
          "start": 324,
          "end": 351
        }
      ],
      "declare": false,
      "start": 320,
      "end": 352
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
            "name": "y3",
            "optional": false,
            "typeAnnotation": null,
            "start": 357,
            "end": 359
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Opt",
                "start": 363,
                "end": 366
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 367,
                    "end": 368
                  },
                  "value": null,
                  "start": 367,
                  "end": 368
                }
              ],
              "selfClosing": true,
              "start": 362,
              "end": 371
            },
            "children": [],
            "closingElement": null,
            "start": 362,
            "end": 371
          },
          "definite": false,
          "start": 357,
          "end": 371
        }
      ],
      "declare": false,
      "start": 353,
      "end": 372
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 372
}
```
