__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 781,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 136,
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
                "name": "Element",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
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
                      "name": "type",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "attributes": [],
            "exportKind": "type"
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
                "name": "ElementClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
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
                      "name": "type",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
      "type": "FunctionDeclaration",
      "start": 138,
      "end": 230,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 164,
        "name": "FunctionComponent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 183,
          "end": 201,
          "properties": [
            {
              "type": "Property",
              "start": 184,
              "end": 188,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 184,
                "end": 188,
                "name": "type",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 184,
                "end": 188,
                "name": "type",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
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
                    "name": "type",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 220,
                    "end": 224,
                    "name": "type",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 220,
                    "end": 224,
                    "name": "type",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "returnType": null
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
            "name": "FunctionComponent",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 249,
            "end": 256,
            "name": "useThis",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 259,
          "end": 303,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
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
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 282,
                      "end": 286,
                      "name": "this"
                    },
                    "selfClosing": true,
                    "typeArguments": null
                  },
                  "closingElement": null,
                  "children": []
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 305,
      "end": 348,
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 325,
        "name": "ClassComponent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 326,
        "end": 348,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 330,
            "end": 346,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 330,
              "end": 334,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 337,
              "end": 345,
              "value": "string",
              "raw": "'string'"
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
    },
    {
      "type": "VariableDeclaration",
      "start": 350,
      "end": 424,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 356,
          "end": 423,
          "id": {
            "type": "Identifier",
            "start": 356,
            "end": 370,
            "name": "MixedComponent",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "Math",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 378,
                  "end": 384,
                  "name": "random",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "consequent": {
              "type": "Identifier",
              "start": 389,
              "end": 406,
              "name": "FunctionComponent",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "alternate": {
              "type": "Identifier",
              "start": 409,
              "end": 423,
              "name": "ClassComponent",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 426,
      "end": 473,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 432,
          "end": 472,
          "id": {
            "type": "Identifier",
            "start": 432,
            "end": 437,
            "name": "elem1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 440,
            "end": 472,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 440,
              "end": 472,
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
              "name": {
                "type": "JSXIdentifier",
                "start": 441,
                "end": 458,
                "name": "FunctionComponent"
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 474,
      "end": 517,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 480,
          "end": 516,
          "id": {
            "type": "Identifier",
            "start": 480,
            "end": 485,
            "name": "elem2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 488,
            "end": 516,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 488,
              "end": 516,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 489,
                "end": 506,
                "name": "FunctionComponent"
              },
              "selfClosing": true,
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
              }
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 518,
      "end": 551,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 524,
          "end": 550,
          "id": {
            "type": "Identifier",
            "start": 524,
            "end": 529,
            "name": "elem3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 532,
            "end": 550,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 532,
              "end": 550,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 533,
                "end": 547,
                "name": "ClassComponent"
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 552,
      "end": 585,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 558,
          "end": 584,
          "id": {
            "type": "Identifier",
            "start": 558,
            "end": 563,
            "name": "elem4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 566,
            "end": 584,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 566,
              "end": 584,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 567,
                "end": 581,
                "name": "MixedComponent"
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 587,
      "end": 687,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 593,
          "end": 686,
          "id": {
            "type": "Identifier",
            "start": 593,
            "end": 596,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 603,
                  "end": 626,
                  "name": "MemberFunctionComponent",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 626,
                  "end": 649,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 653,
                "end": 683,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 653,
                  "end": 673,
                  "name": "MemberClassComponent",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ClassExpression",
                  "start": 675,
                  "end": 683,
                  "id": null,
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 681,
                    "end": 683,
                    "body": []
                  },
                  "decorators": [],
                  "typeParameters": null,
                  "implements": [],
                  "abstract": false,
                  "declare": false,
                  "superTypeArguments": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 689,
      "end": 735,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 695,
          "end": 734,
          "id": {
            "type": "Identifier",
            "start": 695,
            "end": 700,
            "name": "elem5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 703,
            "end": 734,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 703,
              "end": 734,
              "attributes": [],
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
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 736,
      "end": 780,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 742,
          "end": 779,
          "id": {
            "type": "Identifier",
            "start": 742,
            "end": 747,
            "name": "elem6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 750,
            "end": 779,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 750,
              "end": 779,
              "attributes": [],
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
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
