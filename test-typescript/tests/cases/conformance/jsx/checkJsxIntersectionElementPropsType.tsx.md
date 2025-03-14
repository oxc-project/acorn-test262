checkJsxIntersectionElementPropsType.tsx
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
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 80,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 28,
            "end": 78,
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
                  "key": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 71,
                    "decorators": [],
                    "name": "props",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 63,
              "decorators": [],
              "name": "ElementAttributesProperty",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "decorators": [],
        "name": "JSX",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "ClassDeclaration",
      "start": 82,
      "end": 178,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 109,
        "end": 178,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 113,
            "end": 145,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 124,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 124,
              "end": 145,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 125,
                  "end": 143,
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 130,
                    "end": 143,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 132,
                      "end": 143,
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
                              "decorators": [],
                              "name": "P",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 132,
                        "end": 140,
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 148,
            "end": 176,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 162,
              "decorators": [],
              "name": "props",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 175,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 164,
                "end": 175,
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
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 172,
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 105,
        "decorators": [],
        "name": "Component",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 105,
        "end": 108,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 106,
            "end": 107,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 180,
      "end": 233,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 231,
        "end": 233,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 187,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 199,
        "end": 208,
        "decorators": [],
        "name": "Component",
        "optional": false
      },
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
                    "key": {
                      "type": "Identifier",
                      "start": 211,
                      "end": 212,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 213,
                      "end": 222,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 215,
                        "end": 222
                      }
                    }
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 187,
        "end": 190,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 188,
            "end": 189,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 188,
              "end": 189,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 241,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 244,
            "end": 270,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 251,
                      "end": 257,
                      "decorators": [],
                      "name": "foobar",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 259,
                      "end": 268,
                      "raw": "\"example\"",
                      "value": "example"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 248,
              "end": 249,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 279,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 282,
            "end": 304,
            "children": [],
            "closingElement": null,
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
                    "raw": "\"example\"",
                    "value": "example"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 283,
                "end": 284,
                "name": "C"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
