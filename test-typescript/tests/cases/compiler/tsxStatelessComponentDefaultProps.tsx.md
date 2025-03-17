__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 244,
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
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "name": "Props",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "text",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "BackButton",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 131,
          "end": 144,
          "name": "_props",
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
                "name": "Props",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 160,
                  "end": 163,
                  "name": "div"
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
            "name": "BackButton",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 180,
            "end": 192,
            "name": "defaultProps",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 201,
                "end": 205,
                "name": "text",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 207,
                "end": 216,
                "value": "Go Back",
                "raw": "'Go Back'"
              },
              "kind": "init",
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 243,
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 226,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 229,
            "end": 243,
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
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
