enumAssignmentCompat4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 284,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 116,
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 116,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 56,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 25,
              "end": 56,
              "body": {
                "type": "TSEnumBody",
                "start": 37,
                "end": 56,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 47,
                    "end": 50,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 50,
                      "decorators": [],
                      "name": "BAR",
                      "optional": false
                    }
                  }
                ]
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 30,
                "end": 36,
                "decorators": [],
                "name": "MyEnum",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 61,
            "end": 114,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 68,
              "end": 114,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 72,
                  "end": 113,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 79,
                    "decorators": [],
                    "name": "object2",
                    "optional": false
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 82,
                    "end": 113,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 92,
                        "end": 107,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 92,
                          "end": 95,
                          "decorators": [],
                          "name": "foo",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "MemberExpression",
                          "start": 97,
                          "end": 107,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 97,
                            "end": 103,
                            "decorators": [],
                            "name": "MyEnum",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 104,
                            "end": 107,
                            "decorators": [],
                            "name": "BAR",
                            "optional": false
                          }
                        }
                      }
                    ]
                  }
                }
              ],
              "declare": false,
              "kind": "var"
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
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 118,
      "end": 235,
      "body": {
        "type": "TSModuleBlock",
        "start": 130,
        "end": 235,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 136,
            "end": 174,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 143,
              "end": 174,
              "body": {
                "type": "TSEnumBody",
                "start": 155,
                "end": 174,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 165,
                    "end": 168,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 168,
                      "decorators": [],
                      "name": "FOO",
                      "optional": false
                    }
                  }
                ]
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 148,
                "end": 154,
                "decorators": [],
                "name": "MyEnum",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "EmptyStatement",
            "start": 174,
            "end": 175
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 180,
            "end": 233,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 187,
              "end": 233,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 191,
                  "end": 232,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 198,
                    "decorators": [],
                    "name": "object1",
                    "optional": false
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 201,
                    "end": 232,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 211,
                        "end": 226,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 211,
                          "end": 214,
                          "decorators": [],
                          "name": "foo",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "MemberExpression",
                          "start": 216,
                          "end": 226,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 216,
                            "end": 222,
                            "decorators": [],
                            "name": "MyEnum",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 223,
                            "end": 226,
                            "decorators": [],
                            "name": "FOO",
                            "optional": false
                          }
                        }
                      }
                    ]
                  }
                }
              ],
              "declare": false,
              "kind": "var"
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
        "start": 128,
        "end": 129,
        "decorators": [],
        "name": "N",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "VariableDeclaration",
      "start": 237,
      "end": 283,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 282,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 247,
            "decorators": [],
            "name": "broken",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 250,
            "end": 282,
            "elements": [
              {
                "type": "MemberExpression",
                "start": 256,
                "end": 265,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 257,
                  "decorators": [],
                  "name": "N",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 265,
                  "decorators": [],
                  "name": "object1",
                  "optional": false
                }
              },
              {
                "type": "MemberExpression",
                "start": 271,
                "end": 280,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 272,
                  "decorators": [],
                  "name": "M",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 280,
                  "decorators": [],
                  "name": "object2",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
