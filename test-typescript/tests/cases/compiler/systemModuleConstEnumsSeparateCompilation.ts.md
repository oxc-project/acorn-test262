__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 219,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "name": "use",
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
          "start": 21,
          "end": 27,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 27,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 24,
              "end": 27
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 30,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 58,
        "name": "TopLevelConstEnum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 61,
          "end": 62,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": true,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 59,
        "end": 64,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 61,
            "end": 62,
            "id": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 66,
      "end": 156,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 73,
        "end": 156,
        "id": {
          "type": "Identifier",
          "start": 82,
          "end": 85,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 88,
          "end": 156,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 94,
              "end": 119,
              "expression": {
                "type": "CallExpression",
                "start": 94,
                "end": 118,
                "callee": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 97,
                  "name": "use",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "MemberExpression",
                    "start": 98,
                    "end": 117,
                    "object": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 115,
                      "name": "TopLevelConstEnum",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 117,
                      "name": "X",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 124,
              "end": 154,
              "expression": {
                "type": "CallExpression",
                "start": 124,
                "end": 153,
                "callee": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 127,
                  "name": "use",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "MemberExpression",
                    "start": 128,
                    "end": 152,
                    "object": {
                      "type": "MemberExpression",
                      "start": 128,
                      "end": 150,
                      "object": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 129,
                        "name": "M",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 130,
                        "end": 150,
                        "name": "NonTopLevelConstEnum",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 152,
                      "name": "X",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "directive": null
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
    },
    {
      "type": "TSModuleDeclaration",
      "start": 158,
      "end": 219,
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 166,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 167,
        "end": 219,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 173,
            "end": 217,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 180,
              "end": 217,
              "id": {
                "type": "Identifier",
                "start": 191,
                "end": 211,
                "name": "NonTopLevelConstEnum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 214,
                  "end": 215,
                  "id": {
                    "type": "Identifier",
                    "start": 214,
                    "end": 215,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                }
              ],
              "const": true,
              "declare": false,
              "body": {
                "type": "TSEnumBody",
                "start": 212,
                "end": 217,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 214,
                    "end": 215,
                    "id": {
                      "type": "Identifier",
                      "start": 214,
                      "end": 215,
                      "name": "X",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": null,
                    "computed": false
                  }
                ]
              }
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
