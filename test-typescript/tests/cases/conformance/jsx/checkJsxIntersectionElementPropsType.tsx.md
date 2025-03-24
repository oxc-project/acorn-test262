__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 304,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 80,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 28,
            "end": 78,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 63,
              "name": "ElementAttributesProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 64,
              "end": 78,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 66,
                  "end": 76,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 71,
                    "name": "props",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 71,
                    "end": 75,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 73,
                      "end": 75,
                      "members": []
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 82,
      "end": 178,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 105,
        "name": "Component",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 109,
        "end": 178,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 113,
            "end": 145,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 124,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 124,
              "end": 145,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 125,
                  "end": 143,
                  "name": "props",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 130,
                    "end": 143,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 132,
                      "end": 143,
                      "typeName": {
                        "type": "Identifier",
                        "start": 132,
                        "end": 140,
                        "name": "Readonly",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 140,
                        "end": 143,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 141,
                            "end": 142,
                            "typeName": {
                              "type": "Identifier",
                              "start": 141,
                              "end": 142,
                              "name": "P",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
            "start": 148,
            "end": 176,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 162,
              "name": "props",
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
            "readonly": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 175,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 164,
                "end": 175,
                "typeName": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 172,
                  "name": "Readonly",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 172,
                  "end": 175,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 173,
                      "end": 174,
                      "typeName": {
                        "type": "Identifier",
                        "start": 173,
                        "end": 174,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 105,
        "end": 108,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 106,
            "end": 107,
            "name": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 180,
      "end": 233,
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 187,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 199,
        "end": 208,
        "name": "Component",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 231,
        "end": 233,
        "body": []
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 187,
        "end": 190,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 188,
            "end": 189,
            "name": {
              "type": "Identifier",
              "start": 188,
              "end": 189,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 208,
        "end": 230,
        "params": [
          {
            "type": "TSIntersectionType",
            "start": 209,
            "end": 229,
            "types": [
              {
                "type": "TSTypeLiteral",
                "start": 209,
                "end": 225,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 211,
                    "end": 223,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 211,
                      "end": 212,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 213,
                      "end": 222,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 215,
                        "end": 222
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              {
                "type": "TSTypeReference",
                "start": 228,
                "end": 229,
                "typeName": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 229,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 234,
      "end": 271,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 240,
          "end": 270,
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 241,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 244,
            "end": 270,
            "callee": {
              "type": "Identifier",
              "start": 248,
              "end": 249,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 250,
                "end": 269,
                "properties": [
                  {
                    "type": "Property",
                    "start": 251,
                    "end": 268,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 251,
                      "end": 257,
                      "name": "foobar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 259,
                      "end": 268,
                      "value": "example",
                      "raw": "\"example\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 272,
      "end": 304,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 304,
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 279,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 282,
            "end": 304,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 282,
              "end": 304,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 285,
                  "end": 301,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 285,
                    "end": 291,
                    "name": "foobar"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 292,
                    "end": 301,
                    "value": "example",
                    "raw": "\"example\""
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 283,
                "end": 284,
                "name": "C"
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
