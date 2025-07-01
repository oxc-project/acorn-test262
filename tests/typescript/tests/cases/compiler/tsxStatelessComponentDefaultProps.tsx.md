__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 57
          },
          "start": 52,
          "end": 57
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 63,
        "end": 70
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 71
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 87
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "text",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 98
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 100,
                "end": 106
              },
              "start": 98,
              "end": 106
            },
            "accessibility": null,
            "static": false,
            "start": 94,
            "end": 107
          }
        ],
        "start": 88,
        "end": 109
      },
      "declare": false,
      "start": 72,
      "end": 109
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BackButton",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 130
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 144
              },
              "typeArguments": null,
              "start": 139,
              "end": 144
            },
            "start": 137,
            "end": 144
          },
          "start": 131,
          "end": 144
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 160,
                  "end": 163
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true,
                "start": 159,
                "end": 166
              },
              "children": [],
              "closingElement": null,
              "start": 159,
              "end": 166
            },
            "start": 152,
            "end": 166
          }
        ],
        "start": 146,
        "end": 168
      },
      "expression": false,
      "start": 111,
      "end": 168
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "BackButton",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 179
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 192
          },
          "optional": false,
          "computed": false,
          "start": 169,
          "end": 192
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "text",
                "optional": false,
                "typeAnnotation": null,
                "start": 201,
                "end": 205
              },
              "value": {
                "type": "Literal",
                "value": "Go Back",
                "raw": "'Go Back'",
                "start": 207,
                "end": 216
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 201,
              "end": 216
            }
          ],
          "start": 195,
          "end": 219
        },
        "start": 169,
        "end": 219
      },
      "directive": null,
      "start": 169,
      "end": 220
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 225,
            "end": 226
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "BackButton",
                "start": 230,
                "end": 240
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 229,
              "end": 243
            },
            "children": [],
            "closingElement": null,
            "start": 229,
            "end": 243
          },
          "definite": false,
          "start": 225,
          "end": 243
        }
      ],
      "declare": false,
      "start": 221,
      "end": 243
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 243
}
```
