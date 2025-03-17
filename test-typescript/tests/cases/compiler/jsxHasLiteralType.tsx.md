__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 180,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 17,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 30,
        "value": "react",
        "raw": "\"react\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 33,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 48,
        "name": "Props",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 49,
        "end": 71,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 55,
            "end": 69,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 68,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 59,
                "end": 68,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 59,
                    "end": 62,
                    "literal": {
                      "type": "Literal",
                      "start": 59,
                      "end": 62,
                      "value": "a",
                      "raw": "\"a\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 65,
                    "end": 68,
                    "literal": {
                      "type": "Literal",
                      "start": 65,
                      "end": 68,
                      "value": "b",
                      "raw": "\"b\""
                    }
                  }
                ]
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
      "start": 72,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 89,
        "name": "MyComponent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 123,
        "end": 138,
        "object": {
          "type": "Identifier",
          "start": 123,
          "end": 128,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 129,
          "end": 138,
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
        "start": 146,
        "end": 148,
        "body": []
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 89,
        "end": 114,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 90,
            "end": 113,
            "name": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 100,
              "end": 105,
              "typeName": {
                "type": "Identifier",
                "start": 100,
                "end": 105,
                "name": "Props",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 108,
              "end": 113,
              "typeName": {
                "type": "Identifier",
                "start": 108,
                "end": 113,
                "name": "Props",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
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
        "start": 138,
        "end": 145,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 139,
            "end": 140,
            "typeName": {
              "type": "Identifier",
              "start": 139,
              "end": 140,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 142,
            "end": 144,
            "members": []
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 149,
      "end": 179,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 179,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 156,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 159,
            "end": 179,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 159,
              "end": 179,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 172,
                  "end": 177,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 172,
                    "end": 173,
                    "name": "x"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 174,
                    "end": 177,
                    "value": "a",
                    "raw": "\"a\""
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 160,
                "end": 171,
                "name": "MyComponent"
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
