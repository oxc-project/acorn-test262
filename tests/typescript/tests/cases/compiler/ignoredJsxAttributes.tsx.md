__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 67,
  "end": 395,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 67,
      "end": 98,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 74,
          "end": 84,
          "local": {
            "type": "Identifier",
            "start": 79,
            "end": 84,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 90,
        "end": 97,
        "value": "react",
        "raw": "\"react\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 100,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 115,
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 116,
        "end": 168,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 122,
            "end": 134,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 125,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 133,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 127,
                "end": 133
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 139,
            "end": 166,
            "parameters": [
              {
                "type": "Identifier",
                "start": 140,
                "end": 156,
                "decorators": [],
                "name": "dataProp",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 148,
                  "end": 156,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 150,
                    "end": 156
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 165,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 159,
                "end": 165
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 170,
      "end": 220,
      "id": {
        "type": "Identifier",
        "start": 187,
        "end": 192,
        "decorators": [],
        "name": "Yadda",
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
          "start": 193,
          "end": 205,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 198,
            "end": 205,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 200,
              "end": 205,
              "typeName": {
                "type": "Identifier",
                "start": 200,
                "end": 205,
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 206,
        "end": 219,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 208,
          "end": 219,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 208,
            "end": 219,
            "left": {
              "type": "Identifier",
              "start": 208,
              "end": 211,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 212,
              "end": 219,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 222,
      "end": 290,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 289,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 238,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 231,
              "end": 238,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 233,
                "end": 238,
                "typeName": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 238,
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 241,
            "end": 289,
            "properties": [
              {
                "type": "Property",
                "start": 247,
                "end": 254,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 250,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 252,
                  "end": 254,
                  "value": "",
                  "raw": "\"\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 260,
                "end": 276,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 260,
                  "end": 272,
                  "value": "data-yadda",
                  "raw": "\"data-yadda\""
                },
                "value": {
                  "type": "Literal",
                  "start": 274,
                  "end": 276,
                  "value": 42,
                  "raw": "42"
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
      "start": 292,
      "end": 338,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 296,
          "end": 337,
          "id": {
            "type": "Identifier",
            "start": 296,
            "end": 298,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 301,
            "end": 337,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 301,
              "end": 337,
              "name": {
                "type": "JSXIdentifier",
                "start": 302,
                "end": 307,
                "name": "Yadda"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 308,
                  "end": 319,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 308,
                    "end": 311,
                    "name": "foo"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 312,
                    "end": 319,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 320,
                  "end": 335,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 320,
                    "end": 330,
                    "name": "data-yadda"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 331,
                    "end": 335,
                    "expression": {
                      "type": "Literal",
                      "start": 332,
                      "end": 334,
                      "value": 42,
                      "raw": "42"
                    }
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
      "start": 339,
      "end": 385,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 343,
          "end": 384,
          "id": {
            "type": "Identifier",
            "start": 343,
            "end": 345,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 348,
            "end": 384,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 348,
              "end": 384,
              "name": {
                "type": "JSXIdentifier",
                "start": 349,
                "end": 354,
                "name": "Yadda"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 355,
                  "end": 366,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 355,
                    "end": 358,
                    "name": "bar"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 359,
                    "end": 366,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 367,
                  "end": 382,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 367,
                    "end": 377,
                    "name": "data-yadda"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 378,
                    "end": 382,
                    "expression": {
                      "type": "Literal",
                      "start": 379,
                      "end": 381,
                      "value": 42,
                      "raw": "42"
                    }
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
  "sourceType": "module",
  "hashbang": null
}
```
