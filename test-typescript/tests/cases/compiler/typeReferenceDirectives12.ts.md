/types/lib/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 20,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 19,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 19,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 17,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Lib",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
/main.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 26,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 26,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 23,
              "end": 24,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Cls",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
/mod1.ts
```json
{
  "type": "Program",
  "start": 31,
  "end": 242,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 31,
      "end": 58,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 49,
        "end": 57,
        "raw": "\"./main\"",
        "value": "./main"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 39,
          "end": 42,
          "imported": {
            "type": "Identifier",
            "start": 39,
            "end": 42,
            "decorators": [],
            "name": "Cls",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 39,
            "end": 42,
            "decorators": [],
            "name": "Cls",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 59,
      "end": 111,
      "expression": {
        "type": "AssignmentExpression",
        "start": 59,
        "end": 111,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 59,
          "end": 76,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 59,
            "end": 72,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 59,
              "end": 62,
              "decorators": [],
              "name": "Cls",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 63,
              "end": 72,
              "decorators": [],
              "name": "prototype",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 73,
            "end": 76,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 79,
          "end": 111,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 90,
            "end": 111,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 92,
                "end": 109,
                "argument": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 108,
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
          "id": null,
          "params": []
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 113,
      "end": 241,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 137,
        "end": 241,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 143,
            "end": 184,
            "body": {
              "type": "TSInterfaceBody",
              "start": 157,
              "end": 184,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 167,
                  "end": 178,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 167,
                    "end": 170,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 172,
                    "end": 177,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 174,
                      "end": 177,
                      "typeName": {
                        "type": "Identifier",
                        "start": 174,
                        "end": 177,
                        "decorators": [],
                        "name": "Lib",
                        "optional": false
                      }
                    }
                  },
                  "static": false
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 153,
              "end": 156,
              "decorators": [],
              "name": "Cls",
              "optional": false
            }
          },
          {
            "type": "TSModuleDeclaration",
            "start": 189,
            "end": 239,
            "body": {
              "type": "TSModuleBlock",
              "start": 203,
              "end": 239,
              "body": [
                {
                  "type": "TSDeclareFunction",
                  "start": 213,
                  "end": 233,
                  "async": false,
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 222,
                    "end": 225,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 227,
                    "end": 232,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 229,
                      "end": 232,
                      "typeName": {
                        "type": "Identifier",
                        "start": 229,
                        "end": 232,
                        "decorators": [],
                        "name": "Lib",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 199,
              "end": 202,
              "decorators": [],
              "name": "Cls",
              "optional": false
            },
            "kind": "namespace"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 128,
        "end": 136,
        "raw": "\"./main\"",
        "value": "./main"
      }
    }
  ],
  "sourceType": "module"
}
```
/mod2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 138,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 28,
        "raw": "\"./main\"",
        "value": "./main"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Cls",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Cls",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 30,
      "end": 46,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 37,
        "end": 45,
        "raw": "\"./mod1\"",
        "value": "./mod1"
      },
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 48,
      "end": 71,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 55,
        "end": 71,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 61,
            "end": 70,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 61,
              "end": 64,
              "decorators": [],
              "name": "cls",
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 67,
              "end": 70,
              "decorators": [],
              "name": "Cls",
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 72,
      "end": 107,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 79,
        "end": 107,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 85,
            "end": 106,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 85,
              "end": 88,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 91,
              "end": 106,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 91,
                "end": 104,
                "computed": false,
                "object": {
                  "type": "NewExpression",
                  "start": 91,
                  "end": 100,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 98,
                    "decorators": [],
                    "name": "Cls",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 104,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 108,
      "end": 137,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 115,
        "end": 137,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 121,
            "end": 136,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 121,
              "end": 124,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 127,
              "end": 136,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 127,
                "end": 134,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 130,
                  "decorators": [],
                  "name": "Cls",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 134,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
