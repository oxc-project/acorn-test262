ambientModuleExports.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 254,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 69,
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 69,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 22,
            "end": 40,
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 39,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 35,
                "end": 39
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 42,
            "end": 55,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 46,
                "end": 54,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 54,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 47,
                    "end": 54,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 48,
                      "end": 54
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ClassDeclaration",
            "start": 57,
            "end": 67,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 65,
              "end": 67,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ExpressionStatement",
      "start": 71,
      "end": 79,
      "expression": {
        "type": "CallExpression",
        "start": 71,
        "end": 78,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 71,
          "end": 76,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 71,
            "end": 74,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 80,
      "end": 86,
      "expression": {
        "type": "MemberExpression",
        "start": 80,
        "end": 85,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 80,
          "end": 83,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 84,
          "end": 85,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 87,
      "end": 107,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 106,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 95,
            "end": 106,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 99,
              "end": 104,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 99,
                "end": 102,
                "decorators": [],
                "name": "Foo",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 109,
      "end": 212,
      "body": {
        "type": "TSModuleBlock",
        "start": 129,
        "end": 212,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 135,
            "end": 161,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 142,
              "end": 161,
              "async": false,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 151,
                "end": 152,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 154,
                "end": 160,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 156,
                  "end": 160
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 166,
            "end": 187,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 173,
              "end": 187,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 177,
                  "end": 186,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 186,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 178,
                      "end": 186,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 180,
                        "end": 186
                      }
                    }
                  },
                  "init": null
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
            "start": 192,
            "end": 210,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 199,
              "end": 210,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 207,
                "end": 210,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 205,
                "end": 206,
                "decorators": [],
                "name": "C",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 128,
        "decorators": [],
        "name": "Foo2",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ExpressionStatement",
      "start": 214,
      "end": 223,
      "expression": {
        "type": "CallExpression",
        "start": 214,
        "end": 222,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 214,
          "end": 220,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 214,
            "end": 218,
            "decorators": [],
            "name": "Foo2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 219,
            "end": 220,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 224,
      "end": 231,
      "expression": {
        "type": "MemberExpression",
        "start": 224,
        "end": 230,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 224,
          "end": 228,
          "decorators": [],
          "name": "Foo2",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 229,
          "end": 230,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 232,
      "end": 254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 236,
          "end": 253,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 236,
            "end": 238,
            "decorators": [],
            "name": "c2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 241,
            "end": 253,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 245,
              "end": 251,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 245,
                "end": 249,
                "decorators": [],
                "name": "Foo2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
