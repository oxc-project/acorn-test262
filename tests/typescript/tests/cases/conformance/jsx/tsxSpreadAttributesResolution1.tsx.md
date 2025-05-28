__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 215,
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
        "optional": false,
        "typeAnnotation": null
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 48,
        "decorators": [],
        "name": "Poisoned",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 57,
        "end": 72,
        "object": {
          "type": "Identifier",
          "start": 57,
          "end": 62,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 63,
          "end": 72,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
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
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 81,
        "end": 138,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 87,
            "end": 136,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 93,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 93,
              "end": 136,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 114,
                          "end": 117,
                          "name": "div"
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 118,
                          "end": 123,
                          "value": "Hello",
                          "raw": "Hello"
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
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 140,
      "end": 155,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 154,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 149,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 163,
      "end": 193,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 192,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 168,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 171,
            "end": 192,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 171,
              "end": 192,
              "name": {
                "type": "JSXIdentifier",
                "start": 172,
                "end": 180,
                "name": "Poisoned"
              },
              "typeArguments": null,
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
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 194,
      "end": 215,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 214,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 199,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 202,
            "end": 214,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 202,
              "end": 214,
              "name": {
                "type": "JSXIdentifier",
                "start": 203,
                "end": 211,
                "name": "Poisoned"
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
  "sourceType": "script",
  "hashbang": null
}
```
