systemModuleConstEnumsSeparateCompilation.ts
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "use",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 27,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 27,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 24,
              "end": 27
            }
          }
        }
      ]
    },
    {
      "type": "TSEnumDeclaration",
      "start": 30,
      "end": 64,
      "body": {
        "type": "TSEnumBody",
        "start": 59,
        "end": 64,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 61,
            "end": 62,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "X",
              "optional": false
            }
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 58,
        "decorators": [],
        "name": "TopLevelConstEnum",
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 66,
      "end": 156,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 73,
        "end": 156,
        "async": false,
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
                "arguments": [
                  {
                    "type": "MemberExpression",
                    "start": 98,
                    "end": 117,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 115,
                      "decorators": [],
                      "name": "TopLevelConstEnum",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 117,
                      "decorators": [],
                      "name": "X",
                      "optional": false
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 97,
                  "decorators": [],
                  "name": "use",
                  "optional": false
                },
                "optional": false
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 124,
              "end": 154,
              "expression": {
                "type": "CallExpression",
                "start": 124,
                "end": 153,
                "arguments": [
                  {
                    "type": "MemberExpression",
                    "start": 128,
                    "end": 152,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 128,
                      "end": 150,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 129,
                        "decorators": [],
                        "name": "M",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 130,
                        "end": 150,
                        "decorators": [],
                        "name": "NonTopLevelConstEnum",
                        "optional": false
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 152,
                      "decorators": [],
                      "name": "X",
                      "optional": false
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 127,
                  "decorators": [],
                  "name": "use",
                  "optional": false
                },
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
          "end": 85,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 158,
      "end": 219,
      "body": {
        "type": "TSModuleBlock",
        "start": 167,
        "end": 219,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 173,
            "end": 217,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 180,
              "end": 217,
              "body": {
                "type": "TSEnumBody",
                "start": 212,
                "end": 217,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 214,
                    "end": 215,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 214,
                      "end": 215,
                      "decorators": [],
                      "name": "X",
                      "optional": false
                    }
                  }
                ]
              },
              "const": true,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 191,
                "end": 211,
                "decorators": [],
                "name": "NonTopLevelConstEnum",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 166,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
