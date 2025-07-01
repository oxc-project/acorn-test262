__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 17
          },
          "start": 7,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 23,
        "end": 30
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 31
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 48
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 56
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 59,
                      "end": 62
                    },
                    "start": 59,
                    "end": 62
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 65,
                      "end": 68
                    },
                    "start": 65,
                    "end": 68
                  }
                ],
                "start": 59,
                "end": 68
              },
              "start": 57,
              "end": 68
            },
            "accessibility": null,
            "static": false,
            "start": 55,
            "end": 69
          }
        ],
        "start": 49,
        "end": 71
      },
      "declare": false,
      "start": 33,
      "end": 71
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 89
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 105
              },
              "typeArguments": null,
              "start": 100,
              "end": 105
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 113
              },
              "typeArguments": null,
              "start": 108,
              "end": 113
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 90,
            "end": 113
          }
        ],
        "start": 89,
        "end": 114
      },
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 123,
          "end": 128
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 129,
          "end": 138
        },
        "optional": false,
        "computed": false,
        "start": 123,
        "end": 138
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 140
            },
            "typeArguments": null,
            "start": 139,
            "end": 140
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 142,
            "end": 144
          }
        ],
        "start": 138,
        "end": 145
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 146,
        "end": 148
      },
      "abstract": false,
      "declare": false,
      "start": 72,
      "end": 148
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 156
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MyComponent",
                "start": 160,
                "end": 171
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 172,
                    "end": 173
                  },
                  "value": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 174,
                    "end": 177
                  },
                  "start": 172,
                  "end": 177
                }
              ],
              "selfClosing": true,
              "start": 159,
              "end": 179
            },
            "children": [],
            "closingElement": null,
            "start": 159,
            "end": 179
          },
          "definite": false,
          "start": 155,
          "end": 179
        }
      ],
      "declare": false,
      "start": 149,
      "end": 179
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 179
}
```
