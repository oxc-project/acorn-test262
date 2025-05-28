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
      ],
      "source": {
        "type": "Literal",
        "start": 82,
        "end": 94,
        "value": "prop-types",
        "raw": "'prop-types'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 96,
      "end": 122,
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
      ],
      "source": {
        "type": "Literal",
        "start": 114,
        "end": 121,
        "value": "react",
        "raw": "'react'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 124,
      "end": 169,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 168,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 149,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 151,
                  "end": 165,
                  "object": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 160,
                    "decorators": [],
                    "name": "PropTypes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 161,
                    "end": 165,
                    "decorators": [],
                    "name": "bool",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 210,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 209,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 199,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 201,
                  "end": 206,
                  "value": false,
                  "raw": "false"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 212,
      "end": 264,
      "id": {
        "type": "Identifier",
        "start": 221,
        "end": 224,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 225,
          "end": 232,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 227,
              "end": 230,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 227,
                "end": 230,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 227,
                "end": 230,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
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
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 245,
                "end": 250,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 246,
                  "end": 249,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
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
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 266,
      "end": 292,
      "expression": {
        "type": "AssignmentExpression",
        "start": 266,
        "end": 291,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 266,
          "end": 279,
          "object": {
            "type": "Identifier",
            "start": 266,
            "end": 269,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 270,
            "end": 279,
            "decorators": [],
            "name": "propTypes",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 293,
      "end": 325,
      "expression": {
        "type": "AssignmentExpression",
        "start": 293,
        "end": 324,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 293,
          "end": 309,
          "object": {
            "type": "Identifier",
            "start": 293,
            "end": 296,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 297,
            "end": 309,
            "decorators": [],
            "name": "defaultProps",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
      },
      "directive": null
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
