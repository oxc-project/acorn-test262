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
        "decorators": [],
        "name": "React",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "raw": "'react'",
          "value": "react"
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 85,
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
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 72,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 66,
                "end": 72
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 78,
            "end": 83,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "raw": "2",
                  "value": 2
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
        "start": 44,
        "end": 56,
        "decorators": [],
        "name": "PoisonedProp",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 87,
      "end": 201,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 144,
        "end": 201,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 150,
            "end": 199,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 156,
              "decorators": [],
              "name": "render",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 156,
              "end": 199,
              "async": false,
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
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 181,
                          "end": 186,
                          "raw": "Hello",
                          "value": "Hello"
                        }
                      ],
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
                        "selfClosing": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
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
        "start": 93,
        "end": 101,
        "decorators": [],
        "name": "Poisoned",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 110,
        "end": 125,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 110,
          "end": 115,
          "decorators": [],
          "name": "React",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 116,
          "end": 125,
          "decorators": [],
          "name": "Component",
          "optional": false
        }
      },
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
              "decorators": [],
              "name": "PoisonedProp",
              "optional": false
            }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 207,
            "end": 210,
            "decorators": [],
            "name": "obj",
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 220,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 222,
                  "end": 235,
                  "raw": "\"hello world\"",
                  "value": "hello world"
                }
              },
              {
                "type": "Property",
                "start": 241,
                "end": 245,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 241,
                  "end": 242,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 244,
                  "end": 245,
                  "raw": "2",
                  "value": 2
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 307,
            "decorators": [],
            "name": "p",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 310,
            "end": 331,
            "children": [],
            "closingElement": null,
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
                    "decorators": [],
                    "name": "obj",
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
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ClassDeclaration",
      "start": 334,
      "end": 466,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 382,
        "end": 466,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 388,
            "end": 442,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 388,
              "end": 394,
              "decorators": [],
              "name": "render",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 394,
              "end": 442,
              "async": false,
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
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 419,
                          "end": 429,
                          "raw": "Default hi",
                          "value": "Default hi"
                        }
                      ],
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
                        "selfClosing": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 447,
            "end": 464,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 447,
              "end": 455,
              "decorators": [],
              "name": "greeting",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 340,
        "end": 349,
        "decorators": [],
        "name": "EmptyProp",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 358,
        "end": 373,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 358,
          "end": 363,
          "decorators": [],
          "name": "React",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 364,
          "end": 373,
          "decorators": [],
          "name": "Component",
          "optional": false
        }
      },
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 472,
            "end": 473,
            "decorators": [],
            "name": "o",
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 482,
                  "end": 487,
                  "decorators": [],
                  "name": "prop1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 489,
                  "end": 494,
                  "raw": "false",
                  "value": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 507,
            "end": 508,
            "decorators": [],
            "name": "e",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 511,
            "end": 531,
            "children": [],
            "closingElement": null,
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
                    "decorators": [],
                    "name": "o",
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
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
