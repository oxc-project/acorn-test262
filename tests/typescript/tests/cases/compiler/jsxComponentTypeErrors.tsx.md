__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 780,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 136,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 69,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 25,
              "end": 69,
              "id": {
                "type": "Identifier",
                "start": 35,
                "end": 42,
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 43,
                "end": 69,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 49,
                    "end": 65,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 53,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 53,
                      "end": 64,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 55,
                        "end": 64,
                        "literal": {
                          "type": "Literal",
                          "start": 55,
                          "end": 64,
                          "value": "element",
                          "raw": "'element'"
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
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 72,
            "end": 134,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 79,
              "end": 134,
              "id": {
                "type": "Identifier",
                "start": 89,
                "end": 101,
                "decorators": [],
                "name": "ElementClass",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 102,
                "end": 134,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 108,
                    "end": 130,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 112,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 112,
                      "end": 129,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 114,
                        "end": 129,
                        "literal": {
                          "type": "Literal",
                          "start": 114,
                          "end": 129,
                          "value": "element-class",
                          "raw": "'element-class'"
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
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 138,
      "end": 230,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 164,
        "decorators": [],
        "name": "FunctionComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 164,
        "end": 182,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 165,
            "end": 181,
            "name": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 175,
              "end": 181
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 183,
          "end": 201,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 184,
              "end": 188,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 184,
                "end": 188,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 184,
                "end": 188,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 189,
            "end": 201,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 191,
              "end": 201,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 192,
                  "end": 200,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 192,
                    "end": 196,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 197,
                    "end": 200,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 199,
                      "end": 200,
                      "typeName": {
                        "type": "Identifier",
                        "start": 199,
                        "end": 200,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 203,
        "end": 230,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 207,
            "end": 228,
            "argument": {
              "type": "ObjectExpression",
              "start": 214,
              "end": 228,
              "properties": [
                {
                  "type": "Property",
                  "start": 220,
                  "end": 224,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 220,
                    "end": 224,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 220,
                    "end": 224,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 231,
      "end": 303,
      "expression": {
        "type": "AssignmentExpression",
        "start": 231,
        "end": 303,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 231,
          "end": 256,
          "object": {
            "type": "Identifier",
            "start": 231,
            "end": 248,
            "decorators": [],
            "name": "FunctionComponent",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 249,
            "end": 256,
            "decorators": [],
            "name": "useThis",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 259,
          "end": 303,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 270,
            "end": 303,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 274,
                "end": 301,
                "argument": {
                  "type": "JSXElement",
                  "start": 281,
                  "end": 300,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 281,
                    "end": 300,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 282,
                      "end": 286,
                      "name": "this"
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "start": 287,
                        "end": 297,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 287,
                          "end": 291,
                          "name": "type"
                        },
                        "value": {
                          "type": "Literal",
                          "start": 292,
                          "end": 297,
                          "value": "foo",
                          "raw": "\"foo\""
                        }
                      }
                    ],
                    "selfClosing": true
                  },
                  "children": [],
                  "closingElement": null
                }
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 305,
      "end": 348,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 325,
        "decorators": [],
        "name": "ClassComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 326,
        "end": 348,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 330,
            "end": 346,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 330,
              "end": 334,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 337,
              "end": 345,
              "value": "string",
              "raw": "'string'"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 350,
      "end": 424,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 356,
          "end": 423,
          "id": {
            "type": "Identifier",
            "start": 356,
            "end": 370,
            "decorators": [],
            "name": "MixedComponent",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 373,
            "end": 423,
            "test": {
              "type": "CallExpression",
              "start": 373,
              "end": 386,
              "callee": {
                "type": "MemberExpression",
                "start": 373,
                "end": 384,
                "object": {
                  "type": "Identifier",
                  "start": 373,
                  "end": 377,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 378,
                  "end": 384,
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "consequent": {
              "type": "Identifier",
              "start": 389,
              "end": 406,
              "decorators": [],
              "name": "FunctionComponent",
              "optional": false,
              "typeAnnotation": null
            },
            "alternate": {
              "type": "Identifier",
              "start": 409,
              "end": 423,
              "decorators": [],
              "name": "ClassComponent",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 426,
      "end": 473,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 432,
          "end": 472,
          "id": {
            "type": "Identifier",
            "start": 432,
            "end": 437,
            "decorators": [],
            "name": "elem1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 440,
            "end": 472,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 440,
              "end": 472,
              "name": {
                "type": "JSXIdentifier",
                "start": 441,
                "end": 458,
                "name": "FunctionComponent"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 459,
                  "end": 469,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 459,
                    "end": 463,
                    "name": "type"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 464,
                    "end": 469,
                    "value": "abc",
                    "raw": "\"abc\""
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
      "start": 474,
      "end": 517,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 480,
          "end": 516,
          "id": {
            "type": "Identifier",
            "start": 480,
            "end": 485,
            "decorators": [],
            "name": "elem2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 488,
            "end": 516,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 488,
              "end": 516,
              "name": {
                "type": "JSXIdentifier",
                "start": 489,
                "end": 506,
                "name": "FunctionComponent"
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 506,
                "end": 513,
                "params": [
                  {
                    "type": "TSLiteralType",
                    "start": 507,
                    "end": 512,
                    "literal": {
                      "type": "Literal",
                      "start": 507,
                      "end": 512,
                      "value": "abc",
                      "raw": "\"abc\""
                    }
                  }
                ]
              },
              "attributes": [],
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
      "start": 518,
      "end": 551,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 524,
          "end": 550,
          "id": {
            "type": "Identifier",
            "start": 524,
            "end": 529,
            "decorators": [],
            "name": "elem3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 532,
            "end": 550,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 532,
              "end": 550,
              "name": {
                "type": "JSXIdentifier",
                "start": 533,
                "end": 547,
                "name": "ClassComponent"
              },
              "typeArguments": null,
              "attributes": [],
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
      "start": 552,
      "end": 585,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 558,
          "end": 584,
          "id": {
            "type": "Identifier",
            "start": 558,
            "end": 563,
            "decorators": [],
            "name": "elem4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 566,
            "end": 584,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 566,
              "end": 584,
              "name": {
                "type": "JSXIdentifier",
                "start": 567,
                "end": 581,
                "name": "MixedComponent"
              },
              "typeArguments": null,
              "attributes": [],
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
      "start": 587,
      "end": 687,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 593,
          "end": 686,
          "id": {
            "type": "Identifier",
            "start": 593,
            "end": 596,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 599,
            "end": 686,
            "properties": [
              {
                "type": "Property",
                "start": 603,
                "end": 649,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 603,
                  "end": 626,
                  "decorators": [],
                  "name": "MemberFunctionComponent",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 626,
                  "end": 649,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 629,
                    "end": 649,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 635,
                        "end": 645,
                        "argument": {
                          "type": "ObjectExpression",
                          "start": 642,
                          "end": 644,
                          "properties": []
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 653,
                "end": 683,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 653,
                  "end": 673,
                  "decorators": [],
                  "name": "MemberClassComponent",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ClassExpression",
                  "start": 675,
                  "end": 683,
                  "decorators": [],
                  "id": null,
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "start": 681,
                    "end": 683,
                    "body": []
                  },
                  "abstract": false,
                  "declare": false
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
      "start": 689,
      "end": 735,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 695,
          "end": 734,
          "id": {
            "type": "Identifier",
            "start": 695,
            "end": 700,
            "decorators": [],
            "name": "elem5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 703,
            "end": 734,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 703,
              "end": 734,
              "name": {
                "type": "JSXMemberExpression",
                "start": 704,
                "end": 731,
                "object": {
                  "type": "JSXIdentifier",
                  "start": 704,
                  "end": 707,
                  "name": "obj"
                },
                "property": {
                  "type": "JSXIdentifier",
                  "start": 708,
                  "end": 731,
                  "name": "MemberFunctionComponent"
                }
              },
              "typeArguments": null,
              "attributes": [],
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
      "start": 736,
      "end": 780,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 742,
          "end": 779,
          "id": {
            "type": "Identifier",
            "start": 742,
            "end": 747,
            "decorators": [],
            "name": "elem6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 750,
            "end": 779,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 750,
              "end": 779,
              "name": {
                "type": "JSXMemberExpression",
                "start": 751,
                "end": 776,
                "object": {
                  "type": "JSXIdentifier",
                  "start": 751,
                  "end": 754,
                  "name": "obj"
                },
                "property": {
                  "type": "JSXIdentifier",
                  "start": 756,
                  "end": 776,
                  "name": "MemberClassComponent"
                }
              },
              "typeArguments": null,
              "attributes": [],
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
  "sourceType": "script",
  "hashbang": null
}
```
