__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 182,
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
      "type": "VariableDeclaration",
      "start": 34,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 71,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 43,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 46,
            "end": 71,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 62,
              "end": 71,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 47,
                "end": 57,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 52,
                  "end": 57,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 54,
                    "end": 57
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
      "type": "FunctionDeclaration",
      "start": 73,
      "end": 130,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 108,
        "end": 130,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 111,
            "end": 128,
            "argument": {
              "type": "Identifier",
              "start": 118,
              "end": 127,
              "decorators": [],
              "name": "undefined",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 87,
        "decorators": [],
        "name": "Greet",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 88,
          "end": 106,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 89,
            "end": 106,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 91,
              "end": 106,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 92,
                  "end": 105,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 96,
                    "decorators": [],
                    "name": "name",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 97,
                    "end": 105,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 99,
                      "end": 105
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 141,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 147,
          "end": 160,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 147,
            "end": 150,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 153,
            "end": 160,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 153,
              "end": 160,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 154,
                "end": 157,
                "name": "Foo"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 162,
      "end": 182,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 181,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "decorators": [],
            "name": "G",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 172,
            "end": 181,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 172,
              "end": 181,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 173,
                "end": 178,
                "name": "Greet"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
