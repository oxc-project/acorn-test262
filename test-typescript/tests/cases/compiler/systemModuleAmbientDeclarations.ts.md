file1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 188,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 25,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 25,
        "body": []
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 21,
        "decorators": [],
        "name": "Promise",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 26,
      "end": 55,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 46,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 48,
        "end": 54,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 50,
          "end": 54
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 74,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 72,
        "end": 74,
        "body": []
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 71,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 75,
      "end": 97,
      "body": {
        "type": "TSEnumBody",
        "start": 90,
        "end": 97,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 91,
            "end": 96,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "X",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 95,
              "end": 96,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "const": false,
      "declare": true,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 89,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "EmptyStatement",
      "start": 97,
      "end": 98
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 100,
      "end": 129,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 107,
        "end": 129,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 111,
            "end": 128,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 111,
              "end": 118,
              "decorators": [],
              "name": "promise",
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 121,
              "end": 128,
              "decorators": [],
              "name": "Promise",
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 130,
      "end": 151,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 137,
        "end": 151,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 141,
            "end": 150,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 141,
              "end": 144,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 147,
              "end": 150,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 152,
      "end": 169,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 159,
        "end": 169,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 163,
            "end": 168,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 170,
      "end": 187,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 177,
        "end": 187,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 181,
            "end": 186,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "decorators": [],
              "name": "e",
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "decorators": [],
              "name": "E",
              "optional": false
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
  ],
  "sourceType": "module"
}
```
file2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 31,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 30,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 30,
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 27,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": []
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
file3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 26,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 25,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 23,
          "end": 25,
          "body": []
        },
        "declare": true,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 22,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
file4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 30,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 29,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 19,
            "end": 28,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 19,
              "end": 28,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 20,
                "end": 28,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 22,
                  "end": 28
                }
              }
            },
            "init": null
          }
        ],
        "declare": true,
        "kind": "var"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
file5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 30,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 29,
        "body": {
          "type": "TSEnumBody",
          "start": 22,
          "end": 29,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 23,
              "end": 28,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "decorators": [],
                "name": "X",
                "optional": false
              },
              "initializer": {
                "type": "Literal",
                "start": 27,
                "end": 28,
                "raw": "1",
                "value": 1
              }
            }
          ]
        },
        "const": false,
        "declare": true,
        "id": {
          "type": "Identifier",
          "start": 20,
          "end": 21,
          "decorators": [],
          "name": "E",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
file6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 43,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 42,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 42,
        "body": {
          "type": "TSModuleBlock",
          "start": 24,
          "end": 42,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 26,
              "end": 40,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 30,
                  "end": 39,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 39,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 31,
                      "end": 39,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 33,
                        "end": 39
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            }
          ]
        },
        "declare": true,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 22,
          "end": 23,
          "decorators": [],
          "name": "M",
          "optional": false
        },
        "kind": "module"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
