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
      ],
      "source": {
        "type": "Literal",
        "start": 63,
        "end": 70,
        "value": "react",
        "raw": "'react'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 72,
      "end": 109,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 87,
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 88,
        "end": 109,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 94,
            "end": 107,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 98,
              "decorators": [],
              "name": "text",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 106,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 100,
                "end": 106
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
      "type": "FunctionDeclaration",
      "start": 111,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 130,
        "decorators": [],
        "name": "BackButton",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 139,
                "end": 144,
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 159,
                "end": 166,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 160,
                  "end": 163,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true
              },
              "children": [],
              "closingElement": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 169,
      "end": 220,
      "expression": {
        "type": "AssignmentExpression",
        "start": 169,
        "end": 219,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 169,
          "end": 192,
          "object": {
            "type": "Identifier",
            "start": 169,
            "end": 179,
            "decorators": [],
            "name": "BackButton",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 180,
            "end": 192,
            "decorators": [],
            "name": "defaultProps",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 201,
                "end": 205,
                "decorators": [],
                "name": "text",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 207,
                "end": 216,
                "value": "Go Back",
                "raw": "'Go Back'"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 221,
      "end": 243,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 243,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 229,
              "end": 243,
              "name": {
                "type": "JSXIdentifier",
                "start": 230,
                "end": 240,
                "name": "BackButton"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
