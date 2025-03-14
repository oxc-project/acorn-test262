declFileWithInternalModuleNameConflictsInExtendsClause3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 218,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 47,
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 47,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 45,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 26,
              "end": 45,
              "body": {
                "type": "TSInterfaceBody",
                "start": 38,
                "end": 45,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "decorators": [],
                "name": "Z",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "start": 7,
        "end": 12,
        "left": {
          "type": "TSQualifiedName",
          "start": 7,
          "end": 10,
          "left": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "X",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 11,
          "end": 12,
          "decorators": [],
          "name": "C",
          "optional": false
        }
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 48,
      "end": 170,
      "body": {
        "type": "TSModuleBlock",
        "start": 63,
        "end": 170,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 69,
            "end": 168,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 76,
              "end": 168,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 103,
                "end": 168,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "decorators": [],
                "name": "W",
                "optional": false
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 95,
                  "end": 102,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 95,
                    "end": 102,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 95,
                      "end": 100,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 95,
                        "end": 98,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 96,
                          "decorators": [],
                          "name": "X",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 97,
                          "end": 98,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 100,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 101,
                      "end": 102,
                      "decorators": [],
                      "name": "Z",
                      "optional": false
                    }
                  }
                }
              ],
              "superClass": null
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
        "type": "TSQualifiedName",
        "start": 55,
        "end": 62,
        "left": {
          "type": "TSQualifiedName",
          "start": 55,
          "end": 60,
          "left": {
            "type": "TSQualifiedName",
            "start": 55,
            "end": 58,
            "left": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "X",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          "right": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 61,
          "end": 62,
          "decorators": [],
          "name": "C",
          "optional": false
        }
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 172,
      "end": 218,
      "body": {
        "type": "TSModuleBlock",
        "start": 187,
        "end": 218,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 193,
            "end": 216,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 200,
              "end": 216,
              "body": {
                "type": "TSModuleBlock",
                "start": 209,
                "end": 216,
                "body": []
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 207,
                "end": 208,
                "decorators": [],
                "name": "A",
                "optional": false
              },
              "kind": "module"
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
        "type": "TSQualifiedName",
        "start": 179,
        "end": 186,
        "left": {
          "type": "TSQualifiedName",
          "start": 179,
          "end": 184,
          "left": {
            "type": "TSQualifiedName",
            "start": 179,
            "end": 182,
            "left": {
              "type": "Identifier",
              "start": 179,
              "end": 180,
              "decorators": [],
              "name": "X",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          "right": {
            "type": "Identifier",
            "start": 183,
            "end": 184,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 185,
          "end": 186,
          "decorators": [],
          "name": "C",
          "optional": false
        }
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
