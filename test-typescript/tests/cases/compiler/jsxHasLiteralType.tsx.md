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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 30,
        "raw": "\"react\"",
        "value": "react"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 17,
            "decorators": [],
            "name": "React",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 33,
      "end": 71,
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
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
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
                      "raw": "\"a\"",
                      "value": "a"
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
                      "raw": "\"b\"",
                      "value": "b"
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 48,
        "decorators": [],
        "name": "Props",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 72,
      "end": 148,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 146,
        "end": 148,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 89,
        "decorators": [],
        "name": "MyComponent",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 123,
        "end": 138,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 123,
          "end": 128,
          "decorators": [],
          "name": "React",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 129,
          "end": 138,
          "decorators": [],
          "name": "Component",
          "optional": false
        }
      },
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
              "decorators": [],
              "name": "P",
              "optional": false
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 142,
            "end": 144,
            "members": []
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 89,
        "end": 114,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 90,
            "end": 113,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 100,
              "end": 105,
              "typeName": {
                "type": "Identifier",
                "start": 100,
                "end": 105,
                "decorators": [],
                "name": "Props",
                "optional": false
              }
            },
            "default": {
              "type": "TSTypeReference",
              "start": 108,
              "end": 113,
              "typeName": {
                "type": "Identifier",
                "start": 108,
                "end": 113,
                "decorators": [],
                "name": "Props",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
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
      "type": "VariableDeclaration",
      "start": 149,
      "end": 179,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 179,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 156,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 159,
            "end": 179,
            "children": [],
            "closingElement": null,
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
                    "raw": "\"a\"",
                    "value": "a"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 160,
                "end": 171,
                "name": "MyComponent"
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
  "sourceType": "script",
  "hashbang": null
}
```
