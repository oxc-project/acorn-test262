__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 243,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 45,
      "end": 71,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 63,
        "end": 70,
        "raw": "'react'",
        "value": "react"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 52,
          "end": 57,
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 57,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 72,
      "end": 109,
      "body": {
        "type": "TSInterfaceBody",
        "start": 88,
        "end": 109,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 94,
            "end": 107,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 98,
              "decorators": [],
              "name": "text",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 106,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 100,
                "end": 106
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 87,
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 111,
      "end": 168,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 146,
        "end": 168,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 152,
            "end": 166,
            "argument": {
              "type": "JSXElement",
              "start": 159,
              "end": 166,
              "children": [],
              "closingElement": null,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 159,
                "end": 166,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 160,
                  "end": 163,
                  "name": "div"
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
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 130,
        "decorators": [],
        "name": "BackButton",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 131,
          "end": 144,
          "decorators": [],
          "name": "_props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 137,
            "end": 144,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 139,
              "end": 144,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 139,
                "end": 144,
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 169,
      "end": 220,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 169,
        "end": 219,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 169,
          "end": 192,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 169,
            "end": 179,
            "decorators": [],
            "name": "BackButton",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 180,
            "end": 192,
            "decorators": [],
            "name": "defaultProps",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 195,
          "end": 219,
          "properties": [
            {
              "type": "Property",
              "start": 201,
              "end": 216,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 201,
                "end": 205,
                "decorators": [],
                "name": "text",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 207,
                "end": 216,
                "raw": "'Go Back'",
                "value": "Go Back"
              }
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 221,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 243,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 226,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 229,
            "end": 243,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 229,
              "end": 243,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 230,
                "end": 240,
                "name": "BackButton"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
