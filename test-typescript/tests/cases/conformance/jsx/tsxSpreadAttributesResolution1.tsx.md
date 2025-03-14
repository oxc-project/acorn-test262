__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 216,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "React",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "raw": "'react'",
          "value": "react"
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 34,
      "end": 138,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 81,
        "end": 138,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 87,
            "end": 136,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 93,
              "decorators": [],
              "name": "render",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 93,
              "end": 136,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 96,
                "end": 136,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 106,
                    "end": 130,
                    "argument": {
                      "type": "JSXElement",
                      "start": 113,
                      "end": 129,
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 118,
                          "end": 123,
                          "raw": "Hello",
                          "value": "Hello"
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 123,
                        "end": 129,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 125,
                          "end": 128,
                          "name": "div"
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 113,
                        "end": 118,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 114,
                          "end": 117,
                          "name": "div"
                        },
                        "selfClosing": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 48,
        "decorators": [],
        "name": "Poisoned",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 57,
        "end": 72,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 57,
          "end": 62,
          "decorators": [],
          "name": "React",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 63,
          "end": 72,
          "decorators": [],
          "name": "Component",
          "optional": false
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 72,
        "end": 80,
        "params": [
          {
            "type": "TSTypeLiteral",
            "start": 73,
            "end": 75,
            "members": []
          },
          {
            "type": "TSTypeLiteral",
            "start": 77,
            "end": 79,
            "members": []
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 140,
      "end": 155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 154,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 149,
            "decorators": [],
            "name": "obj",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 152,
            "end": 154,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 163,
      "end": 193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 192,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 168,
            "decorators": [],
            "name": "p",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 171,
            "end": 192,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 171,
              "end": 192,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 181,
                  "end": 189,
                  "argument": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 188,
                    "decorators": [],
                    "name": "obj",
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 172,
                "end": 180,
                "name": "Poisoned"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 194,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 214,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 199,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 202,
            "end": 214,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 202,
              "end": 214,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 203,
                "end": 211,
                "name": "Poisoned"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
