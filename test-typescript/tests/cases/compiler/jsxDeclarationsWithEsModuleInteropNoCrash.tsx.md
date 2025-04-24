__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 60,
  "end": 346,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 60,
      "end": 95,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 82,
        "end": 94,
        "raw": "'prop-types'",
        "value": "prop-types"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 67,
          "end": 76,
          "local": {
            "type": "Identifier",
            "start": 67,
            "end": 76,
            "decorators": [],
            "name": "PropTypes",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 96,
      "end": 122,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 114,
        "end": 121,
        "raw": "'react'",
        "value": "react"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 103,
          "end": 108,
          "local": {
            "type": "Identifier",
            "start": 103,
            "end": 108,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 124,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 168,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 139,
            "decorators": [],
            "name": "propTypes",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 142,
            "end": 168,
            "properties": [
              {
                "type": "Property",
                "start": 146,
                "end": 165,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 149,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "start": 151,
                  "end": 165,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 160,
                    "decorators": [],
                    "name": "PropTypes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 161,
                    "end": 165,
                    "decorators": [],
                    "name": "bool",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 210,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 209,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 189,
            "decorators": [],
            "name": "defaultProps",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 192,
            "end": 209,
            "properties": [
              {
                "type": "Property",
                "start": 196,
                "end": 206,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 199,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 201,
                  "end": 206,
                  "raw": "false",
                  "value": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 212,
      "end": 264,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 234,
        "end": 264,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 238,
            "end": 262,
            "argument": {
              "type": "JSXElement",
              "start": 245,
              "end": 261,
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 250,
                  "end": 255,
                  "expression": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 254,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 255,
                "end": 261,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 257,
                  "end": 260,
                  "name": "div"
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 245,
                "end": 250,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 246,
                  "end": 249,
                  "name": "div"
                },
                "selfClosing": false,
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
        "start": 221,
        "end": 224,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 225,
          "end": 232,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 227,
              "end": 230,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 227,
                "end": 230,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 227,
                "end": 230,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 266,
      "end": 292,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 266,
        "end": 291,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 266,
          "end": 279,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 266,
            "end": 269,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 270,
            "end": 279,
            "decorators": [],
            "name": "propTypes",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 282,
          "end": 291,
          "decorators": [],
          "name": "propTypes",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 293,
      "end": 325,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 293,
        "end": 324,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 293,
          "end": 309,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 293,
            "end": 296,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 297,
            "end": 309,
            "decorators": [],
            "name": "defaultProps",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 312,
          "end": 324,
          "decorators": [],
          "name": "defaultProps",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 327,
      "end": 346,
      "declaration": {
        "type": "Identifier",
        "start": 342,
        "end": 345,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
