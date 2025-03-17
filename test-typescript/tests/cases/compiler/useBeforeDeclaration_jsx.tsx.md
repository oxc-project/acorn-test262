__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 295,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 49,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 20,
            "end": 47,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 27,
              "end": 47,
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 44,
                "name": "Element",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 45,
                "end": 47,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 294,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 294,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 65,
            "end": 88,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "JSXElement",
              "start": 76,
              "end": 87,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 76,
                "end": 81,
                "attributes": [],
                "name": {
                  "type": "JSXMemberExpression",
                  "start": 77,
                  "end": 80,
                  "object": {
                    "type": "JSXIdentifier",
                    "start": 77,
                    "end": 78,
                    "name": "C"
                  },
                  "property": {
                    "type": "JSXIdentifier",
                    "start": 79,
                    "end": 80,
                    "name": "z"
                  }
                },
                "selfClosing": false,
                "typeArguments": null
              },
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 81,
                "end": 87,
                "name": {
                  "type": "JSXMemberExpression",
                  "start": 83,
                  "end": 86,
                  "object": {
                    "type": "JSXIdentifier",
                    "start": 83,
                    "end": 84,
                    "name": "C"
                  },
                  "property": {
                    "type": "JSXIdentifier",
                    "start": 85,
                    "end": 86,
                    "name": "z"
                  }
                }
              },
              "children": []
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 93,
            "end": 111,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "JSXElement",
              "start": 104,
              "end": 110,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 104,
                "end": 110,
                "attributes": [],
                "name": {
                  "type": "JSXMemberExpression",
                  "start": 105,
                  "end": 108,
                  "object": {
                    "type": "JSXIdentifier",
                    "start": 105,
                    "end": 106,
                    "name": "C"
                  },
                  "property": {
                    "type": "JSXIdentifier",
                    "start": 107,
                    "end": 108,
                    "name": "z"
                  }
                },
                "selfClosing": true,
                "typeArguments": null
              },
              "closingElement": null,
              "children": []
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 116,
            "end": 150,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "JSXElement",
              "start": 127,
              "end": 149,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 127,
                "end": 142,
                "attributes": [
                  {
                    "type": "JSXSpreadAttribute",
                    "start": 133,
                    "end": 141,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 137,
                      "end": 140,
                      "object": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 138,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 139,
                        "end": 140,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 128,
                  "end": 132,
                  "name": "span"
                },
                "selfClosing": false,
                "typeArguments": null
              },
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 142,
                "end": 149,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 144,
                  "end": 148,
                  "name": "span"
                }
              },
              "children": []
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 155,
            "end": 189,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "JSXElement",
              "start": 166,
              "end": 188,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 166,
                "end": 181,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "start": 172,
                    "end": 180,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 172,
                      "end": 174,
                      "name": "id"
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "start": 175,
                      "end": 180,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 176,
                        "end": 179,
                        "object": {
                          "type": "Identifier",
                          "start": 176,
                          "end": 177,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 178,
                          "end": 179,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    }
                  }
                ],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 167,
                  "end": 171,
                  "name": "span"
                },
                "selfClosing": false,
                "typeArguments": null
              },
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 181,
                "end": 188,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 183,
                  "end": 187,
                  "name": "span"
                }
              },
              "children": []
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 194,
            "end": 224,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 201,
              "end": 202,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "JSXElement",
              "start": 205,
              "end": 223,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 205,
                "end": 211,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 206,
                  "end": 210,
                  "name": "span"
                },
                "selfClosing": false,
                "typeArguments": null
              },
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 216,
                "end": 223,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 218,
                  "end": 222,
                  "name": "span"
                }
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 211,
                  "end": 216,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 212,
                    "end": 215,
                    "object": {
                      "type": "Identifier",
                      "start": 212,
                      "end": 213,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 214,
                      "end": 215,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                }
              ]
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 229,
            "end": 243,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 236,
              "end": 237,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectExpression",
              "start": 240,
              "end": 242,
              "properties": []
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 248,
            "end": 262,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 255,
              "end": 256,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 259,
              "end": 261,
              "value": "",
              "raw": "''"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 267,
            "end": 292,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 274,
              "end": 275,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 278,
              "end": 291,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "JSXElement",
                "start": 284,
                "end": 291,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 284,
                  "end": 287,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 285,
                    "end": 286,
                    "name": "b"
                  },
                  "selfClosing": false,
                  "typeArguments": null
                },
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 287,
                  "end": 291,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 289,
                    "end": 290,
                    "name": "b"
                  }
                },
                "children": []
              },
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
