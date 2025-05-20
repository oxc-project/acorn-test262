__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 226,
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 66,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": null
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
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
        "optional": false,
        "typeAnnotation": null
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
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
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
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 114,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 116,
                  "end": 117,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 117,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 125,
      "end": 225,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 156,
        "end": 225,
        "body": [
          {
            "type": "ExportDefaultDeclaration",
            "start": 162,
            "end": 223,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 177,
              "end": 223,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 216,
                "end": 223,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": {
                "type": "MemberExpression",
                "start": 191,
                "end": 206,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 196,
                  "decorators": [],
                  "name": "React",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 206,
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 206,
                "end": 215,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 207,
                    "end": 210
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 212,
                    "end": 214,
                    "members": []
                  }
                ]
              },
              "typeParameters": null
            },
            "exportKind": "value"
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 40,
  "end": 194,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 40,
      "end": 82,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 66,
        "end": 81,
        "raw": "'BaseComponent'",
        "value": "BaseComponent"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 47,
          "end": 60,
          "local": {
            "type": "Identifier",
            "start": 47,
            "end": 60,
            "decorators": [],
            "name": "BaseComponent",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 83,
      "end": 194,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 136,
        "end": 194,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 142,
            "end": 192,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 148,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 148,
              "end": 192,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 151,
                "end": 192,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 161,
                    "end": 186,
                    "argument": {
                      "type": "JSXElement",
                      "start": 168,
                      "end": 185,
                      "children": [],
                      "closingElement": null,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 168,
                        "end": 185,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 169,
                          "end": 182,
                          "name": "BaseComponent"
                        },
                        "selfClosing": true,
                        "typeArguments": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 102,
        "decorators": [],
        "name": "TestComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 111,
        "end": 126,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 111,
          "end": 116,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 117,
          "end": 126,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 126,
        "end": 135,
        "params": [
          {
            "type": "TSAnyKeyword",
            "start": 127,
            "end": 130
          },
          {
            "type": "TSTypeLiteral",
            "start": 132,
            "end": 134,
            "members": []
          }
        ]
      },
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
