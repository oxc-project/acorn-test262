useBeforeDeclaration_jsx.tsx
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
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 49,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 20,
            "end": 47,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 27,
              "end": 47,
              "body": {
                "type": "TSInterfaceBody",
                "start": 45,
                "end": 47,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 44,
                "decorators": [],
                "name": "Element",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "JSX",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 294,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 294,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 65,
            "end": 88,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "JSXElement",
              "start": 76,
              "end": 87,
              "children": [],
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
                "selfClosing": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 93,
            "end": 111,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "JSXElement",
              "start": 104,
              "end": 110,
              "children": [],
              "closingElement": null,
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
                "selfClosing": true
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 116,
            "end": 150,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "JSXElement",
              "start": 127,
              "end": 149,
              "children": [],
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
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 138,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 139,
                        "end": 140,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  }
                ],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 128,
                  "end": 132,
                  "name": "span"
                },
                "selfClosing": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 155,
            "end": 189,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "JSXElement",
              "start": 166,
              "end": 188,
              "children": [],
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
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 176,
                          "end": 177,
                          "decorators": [],
                          "name": "C",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 178,
                          "end": 179,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        }
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
                "selfClosing": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 194,
            "end": 224,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 201,
              "end": 202,
              "decorators": [],
              "name": "e",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "JSXElement",
              "start": 205,
              "end": 223,
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 211,
                  "end": 216,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 212,
                    "end": 215,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 212,
                      "end": 213,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 214,
                      "end": 215,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  }
                }
              ],
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
                "selfClosing": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 229,
            "end": 243,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 236,
              "end": 237,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "ObjectExpression",
              "start": 240,
              "end": 242,
              "properties": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 248,
            "end": 262,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 255,
              "end": 256,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 259,
              "end": 261,
              "raw": "''",
              "value": ""
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 267,
            "end": 292,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 274,
              "end": 275,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 278,
              "end": 291,
              "async": false,
              "body": {
                "type": "JSXElement",
                "start": 284,
                "end": 291,
                "children": [],
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
                  "selfClosing": false
                }
              },
              "expression": true,
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
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
