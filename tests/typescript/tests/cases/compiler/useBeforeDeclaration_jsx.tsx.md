__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 44
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 45,
                "end": 47
              },
              "declare": false,
              "start": 27,
              "end": 47
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 20,
            "end": 47
          }
        ],
        "start": 14,
        "end": 49
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 49
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 58
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 73
            },
            "typeAnnotation": null,
            "value": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXMemberExpression",
                  "object": {
                    "type": "JSXIdentifier",
                    "name": "C",
                    "start": 77,
                    "end": 78
                  },
                  "property": {
                    "type": "JSXIdentifier",
                    "name": "z",
                    "start": 79,
                    "end": 80
                  },
                  "start": 77,
                  "end": 80
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 76,
                "end": 81
              },
              "children": [],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXMemberExpression",
                  "object": {
                    "type": "JSXIdentifier",
                    "name": "C",
                    "start": 83,
                    "end": 84
                  },
                  "property": {
                    "type": "JSXIdentifier",
                    "name": "z",
                    "start": 85,
                    "end": 86
                  },
                  "start": 83,
                  "end": 86
                },
                "start": 81,
                "end": 87
              },
              "start": 76,
              "end": 87
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 65,
            "end": 88
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 101
            },
            "typeAnnotation": null,
            "value": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXMemberExpression",
                  "object": {
                    "type": "JSXIdentifier",
                    "name": "C",
                    "start": 105,
                    "end": 106
                  },
                  "property": {
                    "type": "JSXIdentifier",
                    "name": "z",
                    "start": 107,
                    "end": 108
                  },
                  "start": 105,
                  "end": 108
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true,
                "start": 104,
                "end": 110
              },
              "children": [],
              "closingElement": null,
              "start": 104,
              "end": 110
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 93,
            "end": 111
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 124
            },
            "typeAnnotation": null,
            "value": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "span",
                  "start": 128,
                  "end": 132
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXSpreadAttribute",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 137,
                        "end": 138
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 139,
                        "end": 140
                      },
                      "optional": false,
                      "computed": false,
                      "start": 137,
                      "end": 140
                    },
                    "start": 133,
                    "end": 141
                  }
                ],
                "selfClosing": false,
                "start": 127,
                "end": 142
              },
              "children": [],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "span",
                  "start": 144,
                  "end": 148
                },
                "start": 142,
                "end": 149
              },
              "start": 127,
              "end": 149
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 116,
            "end": 150
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 163
            },
            "typeAnnotation": null,
            "value": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "span",
                  "start": 167,
                  "end": 171
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "id",
                      "start": 172,
                      "end": 174
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 176,
                          "end": 177
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 178,
                          "end": 179
                        },
                        "optional": false,
                        "computed": false,
                        "start": 176,
                        "end": 179
                      },
                      "start": 175,
                      "end": 180
                    },
                    "start": 172,
                    "end": 180
                  }
                ],
                "selfClosing": false,
                "start": 166,
                "end": 181
              },
              "children": [],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "span",
                  "start": 183,
                  "end": 187
                },
                "start": 181,
                "end": 188
              },
              "start": 166,
              "end": 188
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 155,
            "end": 189
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 201,
              "end": 202
            },
            "typeAnnotation": null,
            "value": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "span",
                  "start": 206,
                  "end": 210
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 205,
                "end": 211
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 212,
                      "end": 213
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 214,
                      "end": 215
                    },
                    "optional": false,
                    "computed": false,
                    "start": 212,
                    "end": 215
                  },
                  "start": 211,
                  "end": 216
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "span",
                  "start": 218,
                  "end": 222
                },
                "start": 216,
                "end": 223
              },
              "start": 205,
              "end": 223
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 194,
            "end": 224
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 237
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 240,
              "end": 242
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 229,
            "end": 243
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 255,
              "end": 256
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 259,
              "end": 261
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 248,
            "end": 262
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 275
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 285,
                    "end": 286
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 284,
                  "end": 287
                },
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 289,
                    "end": 290
                  },
                  "start": 287,
                  "end": 291
                },
                "start": 284,
                "end": 291
              },
              "id": null,
              "generator": false,
              "start": 278,
              "end": 291
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 267,
            "end": 292
          }
        ],
        "start": 59,
        "end": 294
      },
      "abstract": false,
      "declare": false,
      "start": 51,
      "end": 294
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 294
}
```
