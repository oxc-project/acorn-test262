__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 188,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 80,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 80,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 80,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 78,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 29,
                "end": 78,
                "id": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 41,
                  "name": "foo",
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
                    "start": 42,
                    "end": 51,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 43,
                      "end": 51,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 45,
                        "end": 51
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 53,
                  "end": 78,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 63,
                      "end": 72,
                      "argument": {
                        "type": "Identifier",
                        "start": 70,
                        "end": 71,
                        "name": "x",
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
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 82,
      "end": 171,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 89,
        "end": 171,
        "id": {
          "type": "Identifier",
          "start": 96,
          "end": 97,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 98,
          "end": 171,
          "body": [
            {
              "type": "TSImportEqualsDeclaration",
              "start": 104,
              "end": 121,
              "id": {
                "type": "Identifier",
                "start": 111,
                "end": 112,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 115,
                "end": 120,
                "left": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 116,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 120,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            {
              "type": "VariableDeclaration",
              "start": 126,
              "end": 143,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 130,
                  "end": 142,
                  "id": {
                    "type": "Identifier",
                    "start": 130,
                    "end": 134,
                    "name": "bVal",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 137,
                    "end": 142,
                    "callee": {
                      "type": "Identifier",
                      "start": 137,
                      "end": 138,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 139,
                        "end": 141,
                        "value": 10,
                        "raw": "10"
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 148,
              "end": 169,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 155,
                "end": 169,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 159,
                    "end": 168,
                    "id": {
                      "type": "Identifier",
                      "start": 159,
                      "end": 164,
                      "name": "bVal2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Identifier",
                      "start": 167,
                      "end": 168,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 172,
      "end": 188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 187,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 177,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 180,
            "end": 187,
            "callee": {
              "type": "MemberExpression",
              "start": 180,
              "end": 183,
              "object": {
                "type": "Identifier",
                "start": 180,
                "end": 181,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 182,
                "end": 183,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 184,
                "end": 186,
                "value": 11,
                "raw": "11"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
