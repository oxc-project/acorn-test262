__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 307,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 98,
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 98,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "decorators": [],
              "name": "Element",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 45,
            "end": 96,
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 96,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 77,
                  "end": 93,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 82,
                    "decorators": [],
                    "name": "test1",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 82,
                    "end": 92,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 84,
                      "end": 92,
                      "typeName": {
                        "type": "Identifier",
                        "start": 84,
                        "end": 92,
                        "decorators": [],
                        "name": "Attribs1",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "JSX",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 99,
      "end": 148,
      "body": {
        "type": "TSInterfaceBody",
        "start": 118,
        "end": 148,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 121,
            "end": 146,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 123,
              "decorators": [],
              "name": "c1",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 145,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 126,
                "end": 145,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 127,
                    "end": 136,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 128,
                      "end": 136,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 130,
                        "end": 136
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 138,
                  "end": 145,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 141,
                    "end": 145
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 117,
        "decorators": [],
        "name": "Attribs1",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 156,
      "end": 187,
      "expression": {
        "type": "JSXElement",
        "start": 156,
        "end": 186,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 156,
          "end": 186,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 163,
              "end": 183,
              "name": {
                "type": "JSXIdentifier",
                "start": 163,
                "end": 165,
                "name": "c1"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 166,
                "end": 183,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 167,
                  "end": 182,
                  "async": false,
                  "body": {
                    "type": "MemberExpression",
                    "start": 174,
                    "end": 182,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 174,
                      "end": 175,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 176,
                      "end": 182,
                      "decorators": [],
                      "name": "length",
                      "optional": false
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 168,
                      "end": 169,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ]
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 157,
            "end": 162,
            "name": "test1"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 194,
      "end": 228,
      "expression": {
        "type": "JSXElement",
        "start": 194,
        "end": 227,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 194,
          "end": 227,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 201,
              "end": 224,
              "name": {
                "type": "JSXIdentifier",
                "start": 201,
                "end": 208,
                "name": "data-c1"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 209,
                "end": 224,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 210,
                  "end": 223,
                  "async": false,
                  "body": {
                    "type": "MemberExpression",
                    "start": 217,
                    "end": 223,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 217,
                      "end": 218,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 223,
                      "decorators": [],
                      "name": "leng",
                      "optional": false
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 211,
                      "end": 212,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ]
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 195,
            "end": 200,
            "name": "test1"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 247,
      "end": 276,
      "expression": {
        "type": "JSXElement",
        "start": 247,
        "end": 275,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 247,
          "end": 275,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 254,
              "end": 272,
              "name": {
                "type": "JSXIdentifier",
                "start": 254,
                "end": 256,
                "name": "c1"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 257,
                "end": 272,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 258,
                  "end": 271,
                  "async": false,
                  "body": {
                    "type": "MemberExpression",
                    "start": 265,
                    "end": 271,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 265,
                      "end": 266,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 271,
                      "decorators": [],
                      "name": "leng",
                      "optional": false
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 259,
                      "end": 260,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ]
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 248,
            "end": 253,
            "name": "test1"
          },
          "selfClosing": true
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
