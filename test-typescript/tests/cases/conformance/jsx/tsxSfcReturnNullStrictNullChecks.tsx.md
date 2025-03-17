__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 164,
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
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 66,
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
            "end": 66,
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
              "type": "Literal",
              "start": 62,
              "end": 66,
              "value": null,
              "raw": "null"
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
      "start": 69,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 83,
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
          "start": 84,
          "end": 102,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 85,
            "end": 102,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 87,
              "end": 102,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 88,
                  "end": 101,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 92,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 93,
                    "end": 101,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 95,
                      "end": 101
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
        "start": 104,
        "end": 121,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 107,
            "end": 119,
            "argument": {
              "type": "Literal",
              "start": 114,
              "end": 118,
              "value": null,
              "raw": "null"
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
      "start": 123,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 142,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 132,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 135,
            "end": 142,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 135,
              "end": 142,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 136,
                "end": 139,
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
      "start": 144,
      "end": 164,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 150,
          "end": 163,
          "id": {
            "type": "Identifier",
            "start": 150,
            "end": 151,
            "name": "G",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 154,
            "end": 163,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 154,
              "end": 163,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 155,
                "end": 160,
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
