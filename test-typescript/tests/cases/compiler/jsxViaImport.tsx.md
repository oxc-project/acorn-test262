__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 71,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 23,
            "end": 69,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 58,
              "name": "ElementAttributesProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 66,
                    "name": "props",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": null,
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 72,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 92,
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 93,
        "end": 124,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 97,
            "end": 122,
            "id": {
              "type": "Identifier",
              "start": 103,
              "end": 112,
              "name": "Component",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 119,
              "end": 122,
              "body": []
            },
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 112,
              "end": 118,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 113,
                  "end": 114,
                  "name": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 114,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 116,
                  "end": 117,
                  "name": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 117,
                    "name": "U",
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
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 125,
      "end": 218,
      "id": {
        "type": "Literal",
        "start": 140,
        "end": 155,
        "value": "BaseComponent",
        "raw": "\"BaseComponent\""
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 196,
                  "name": "base",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 170,
                    "end": 196,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 172,
                      "end": 196,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 172,
                        "end": 187,
                        "left": {
                          "type": "Identifier",
                          "start": 172,
                          "end": 177,
                          "name": "React",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 178,
                          "end": 187,
                          "name": "Component",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
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
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "TSExportAssignment",
            "start": 202,
            "end": 216,
            "expression": {
              "type": "Identifier",
              "start": 211,
              "end": 215,
              "name": "base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
        "name": "BaseComponent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 63,
        "end": 87,
        "expression": {
          "type": "Literal",
          "start": 71,
          "end": 86,
          "value": "BaseComponent",
          "raw": "'BaseComponent'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 89,
      "end": 200,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 108,
        "name": "TestComponent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 117,
        "end": 132,
        "object": {
          "type": "Identifier",
          "start": 117,
          "end": 122,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 123,
          "end": 132,
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
        "start": 142,
        "end": 200,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 148,
            "end": 198,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 148,
              "end": 154,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 154,
              "end": 198,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
  "sourceType": "module",
  "hashbang": null
}
```
