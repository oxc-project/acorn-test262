component.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 219,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 71,
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 71,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 23,
            "end": 69,
            "body": {
              "type": "TSInterfaceBody",
              "start": 59,
              "end": 69,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 61,
                  "end": 67,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 66,
                    "decorators": [],
                    "name": "props",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 58,
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
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "JSX",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 72,
      "end": 124,
      "body": {
        "type": "TSModuleBlock",
        "start": 93,
        "end": 124,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 97,
            "end": 122,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 119,
              "end": 122,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 103,
              "end": 112,
              "decorators": [],
              "name": "Component",
              "optional": false
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 112,
              "end": 118,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 113,
                  "end": 114,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 114,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 116,
                  "end": 117,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 117,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 92,
        "decorators": [],
        "name": "React",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 125,
      "end": 218,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 156,
        "end": 218,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 162,
            "end": 197,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 166,
                "end": 196,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 196,
                  "decorators": [],
                  "name": "base",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 170,
                    "end": 196,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 172,
                      "end": 196,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 187,
                        "end": 196,
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 188,
                            "end": 191
                          },
                          {
                            "type": "TSTypeLiteral",
                            "start": 193,
                            "end": 195,
                            "members": []
                          }
                        ]
                      },
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 172,
                        "end": 187,
                        "left": {
                          "type": "Identifier",
                          "start": 172,
                          "end": 177,
                          "decorators": [],
                          "name": "React",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 178,
                          "end": 187,
                          "decorators": [],
                          "name": "Component",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "TSExportAssignment",
            "start": 202,
            "end": 216,
            "expression": {
              "type": "Identifier",
              "start": 211,
              "end": 215,
              "decorators": [],
              "name": "base",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 140,
        "end": 155,
        "raw": "\"BaseComponent\"",
        "value": "BaseComponent"
      }
    }
  ],
  "sourceType": "module"
}
```
consumer.tsx
```json
{
  "type": "Program",
  "start": 40,
  "end": 201,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 40,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 60,
        "decorators": [],
        "name": "BaseComponent",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 63,
        "end": 87,
        "expression": {
          "type": "Literal",
          "start": 71,
          "end": 86,
          "raw": "'BaseComponent'",
          "value": "BaseComponent"
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 89,
      "end": 200,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 142,
        "end": 200,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 148,
            "end": 198,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 148,
              "end": 154,
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
              "start": 154,
              "end": 198,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 157,
                "end": 198,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 167,
                    "end": 192,
                    "argument": {
                      "type": "JSXElement",
                      "start": 174,
                      "end": 191,
                      "children": [],
                      "closingElement": null,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 174,
                        "end": 191,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 175,
                          "end": 188,
                          "name": "BaseComponent"
                        },
                        "selfClosing": true
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
        "start": 95,
        "end": 108,
        "decorators": [],
        "name": "TestComponent",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 117,
        "end": 132,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 117,
          "end": 122,
          "decorators": [],
          "name": "React",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 123,
          "end": 132,
          "decorators": [],
          "name": "Component",
          "optional": false
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 132,
        "end": 141,
        "params": [
          {
            "type": "TSAnyKeyword",
            "start": 133,
            "end": 136
          },
          {
            "type": "TSTypeLiteral",
            "start": 138,
            "end": 140,
            "members": []
          }
        ]
      }
    }
  ],
  "sourceType": "module"
}
```
