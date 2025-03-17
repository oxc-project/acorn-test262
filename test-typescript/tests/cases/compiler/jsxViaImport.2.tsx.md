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
      "end": 225,
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
              "id": null,
              "superClass": {
                "type": "MemberExpression",
                "start": 191,
                "end": 206,
                "object": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 196,
                  "name": "React",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 206,
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
                "start": 216,
                "end": 223,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
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
              }
            },
            "exportKind": "value"
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
  "end": 195,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 40,
      "end": 82,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 47,
          "end": 60,
          "local": {
            "type": "Identifier",
            "start": 47,
            "end": 60,
            "name": "BaseComponent",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 66,
        "end": 81,
        "value": "BaseComponent",
        "raw": "'BaseComponent'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 83,
      "end": 194,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 102,
        "name": "TestComponent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 111,
        "end": 126,
        "object": {
          "type": "Identifier",
          "start": 111,
          "end": 116,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 117,
          "end": 126,
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
        "start": 136,
        "end": 194,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 142,
            "end": 192,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 148,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 148,
              "end": 192,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
