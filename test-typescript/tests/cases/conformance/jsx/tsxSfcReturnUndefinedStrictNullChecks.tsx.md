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
      "type": "VariableDeclaration",
      "start": 34,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 71,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 43,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 46,
            "end": 71,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 47,
                "end": 57,
                "name": "props",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 52,
                  "end": 57,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 54,
                    "end": 57
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 62,
              "end": 71,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 73,
      "end": 130,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 87,
        "name": "Greet",
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
          "start": 88,
          "end": 106,
          "name": "x",
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
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 96,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 97,
                    "end": 105,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 99,
                      "end": 105
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 147,
            "end": 150,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 153,
            "end": 160,
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
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "name": "G",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 172,
            "end": 181,
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
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
