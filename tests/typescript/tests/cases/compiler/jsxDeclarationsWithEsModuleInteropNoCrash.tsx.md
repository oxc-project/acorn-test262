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
            "name": "PropTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 76
          },
          "start": 67,
          "end": 76
        }
      ],
      "source": {
        "type": "Literal",
        "value": "prop-types",
        "raw": "'prop-types'",
        "start": 82,
        "end": 94
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 60,
      "end": 95
    },
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
            "start": 103,
            "end": 108
          },
          "start": 103,
          "end": 108
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 114,
        "end": 121
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 96,
      "end": 122
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
            "name": "propTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 139
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 146,
                  "end": 149
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 151,
                    "end": 160
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bool",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 161,
                    "end": 165
                  },
                  "optional": false,
                  "computed": false,
                  "start": 151,
                  "end": 165
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 146,
                "end": 165
              }
            ],
            "start": 142,
            "end": 168
          },
          "definite": false,
          "start": 130,
          "end": 168
        }
      ],
      "declare": false,
      "start": 124,
      "end": 169
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
            "name": "defaultProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 189
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 199
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 201,
                  "end": 206
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 196,
                "end": 206
              }
            ],
            "start": 192,
            "end": 209
          },
          "definite": false,
          "start": 177,
          "end": 209
        }
      ],
      "declare": false,
      "start": 171,
      "end": 210
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 224
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 227,
                "end": 230
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 227,
                "end": 230
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 227,
              "end": 230
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 225,
          "end": 232
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
                  "start": 246,
                  "end": 249
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 245,
                "end": 250
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 251,
                    "end": 254
                  },
                  "start": 250,
                  "end": 255
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 257,
                  "end": 260
                },
                "start": 255,
                "end": 261
              },
              "start": 245,
              "end": 261
            },
            "start": 238,
            "end": 262
          }
        ],
        "start": 234,
        "end": 264
      },
      "expression": false,
      "start": 212,
      "end": 264
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
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 266,
            "end": 269
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "propTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 270,
            "end": 279
          },
          "optional": false,
          "computed": false,
          "start": 266,
          "end": 279
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "propTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 282,
          "end": 291
        },
        "start": 266,
        "end": 291
      },
      "directive": null,
      "start": 266,
      "end": 292
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
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 293,
            "end": 296
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 309
          },
          "optional": false,
          "computed": false,
          "start": 293,
          "end": 309
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "defaultProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 312,
          "end": 324
        },
        "start": 293,
        "end": 324
      },
      "directive": null,
      "start": 293,
      "end": 325
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 342,
        "end": 345
      },
      "exportKind": "value",
      "start": 327,
      "end": 346
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 60,
  "end": 346
}
```
