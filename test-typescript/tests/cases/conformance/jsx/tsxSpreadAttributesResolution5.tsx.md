__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 532,
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
      "end": 85,
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
        "end": 85,
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
            "end": 83,
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
              "end": 82,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 81,
                "end": 82,
                "literal": {
                  "type": "Literal",
                  "start": 81,
                  "end": 82,
                  "value": 2,
                  "raw": "2"
                }
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
      "start": 87,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 101,
        "name": "Poisoned",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 110,
        "end": 125,
        "object": {
          "type": "Identifier",
          "start": 110,
          "end": 115,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 116,
          "end": 125,
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
        "start": 144,
        "end": 201,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 150,
            "end": 199,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 156,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 156,
              "end": 199,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 159,
                "end": 199,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 169,
                    "end": 193,
                    "argument": {
                      "type": "JSXElement",
                      "start": 176,
                      "end": 192,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 176,
                        "end": 181,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 177,
                          "end": 180,
                          "name": "div"
                        },
                        "selfClosing": false,
                        "typeArguments": null
                      },
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 186,
                        "end": 192,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 188,
                          "end": 191,
                          "name": "div"
                        }
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 181,
                          "end": 186,
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
        "start": 125,
        "end": 143,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 126,
            "end": 138,
            "typeName": {
              "type": "Identifier",
              "start": 126,
              "end": 138,
              "name": "PoisonedProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 140,
            "end": 142,
            "members": []
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 203,
      "end": 248,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 207,
          "end": 247,
          "id": {
            "type": "Identifier",
            "start": 207,
            "end": 210,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 213,
            "end": 247,
            "properties": [
              {
                "type": "Property",
                "start": 219,
                "end": 235,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 220,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 222,
                  "end": 235,
                  "value": "hello world",
                  "raw": "\"hello world\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 241,
                "end": 245,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 241,
                  "end": 242,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 244,
                  "end": 245,
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 302,
      "end": 332,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 306,
          "end": 331,
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 307,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 310,
            "end": 331,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 310,
              "end": 331,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 320,
                  "end": 328,
                  "argument": {
                    "type": "Identifier",
                    "start": 324,
                    "end": 327,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 311,
                "end": 319,
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
      "type": "ClassDeclaration",
      "start": 334,
      "end": 466,
      "id": {
        "type": "Identifier",
        "start": 340,
        "end": 349,
        "name": "EmptyProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 358,
        "end": 373,
        "object": {
          "type": "Identifier",
          "start": 358,
          "end": 363,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 364,
          "end": 373,
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
        "start": 382,
        "end": 466,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 388,
            "end": 442,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 388,
              "end": 394,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 394,
              "end": 442,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 397,
                "end": 442,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 407,
                    "end": 436,
                    "argument": {
                      "type": "JSXElement",
                      "start": 414,
                      "end": 435,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 414,
                        "end": 419,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 415,
                          "end": 418,
                          "name": "div"
                        },
                        "selfClosing": false,
                        "typeArguments": null
                      },
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 429,
                        "end": 435,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 431,
                          "end": 434,
                          "name": "div"
                        }
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 419,
                          "end": 429,
                          "value": "Default hi",
                          "raw": "Default hi"
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
          },
          {
            "type": "PropertyDefinition",
            "start": 447,
            "end": 464,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 447,
              "end": 455,
              "name": "greeting",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 455,
              "end": 463,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 457,
                "end": 463
              }
            },
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
        "start": 373,
        "end": 381,
        "params": [
          {
            "type": "TSTypeLiteral",
            "start": 374,
            "end": 376,
            "members": []
          },
          {
            "type": "TSTypeLiteral",
            "start": 378,
            "end": 380,
            "members": []
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 468,
      "end": 496,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 472,
          "end": 496,
          "id": {
            "type": "Identifier",
            "start": 472,
            "end": 473,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 476,
            "end": 496,
            "properties": [
              {
                "type": "Property",
                "start": 482,
                "end": 494,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 482,
                  "end": 487,
                  "name": "prop1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 489,
                  "end": 494,
                  "value": false,
                  "raw": "false"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 503,
      "end": 532,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 507,
          "end": 531,
          "id": {
            "type": "Identifier",
            "start": 507,
            "end": 508,
            "name": "e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 511,
            "end": 531,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 511,
              "end": 531,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 522,
                  "end": 528,
                  "argument": {
                    "type": "Identifier",
                    "start": 526,
                    "end": 527,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 512,
                "end": 521,
                "name": "EmptyProp"
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
