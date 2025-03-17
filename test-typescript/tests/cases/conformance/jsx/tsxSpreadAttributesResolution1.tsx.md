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
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "value": "react",
          "raw": "'react'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 34,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 48,
        "name": "Poisoned",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 57,
        "end": 72,
        "object": {
          "type": "Identifier",
          "start": 57,
          "end": 62,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 63,
          "end": 72,
          "name": "Component",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 81,
        "end": 138,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 87,
            "end": 136,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 93,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 93,
              "end": 136,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "selfClosing": false,
                        "typeArguments": null
                      },
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
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 118,
                          "end": 123,
                          "value": "Hello",
                          "raw": "Hello"
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
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
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 149,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 152,
            "end": 154,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 168,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 171,
            "end": 192,
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
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
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
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 199,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 202,
            "end": 214,
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
