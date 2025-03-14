__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 279,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 21,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 21,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 11,
            "end": 19,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 14,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 14,
              "end": 19,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 17,
                "end": 19,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 23,
      "end": 59,
      "expression": {
        "type": "TSAsExpression",
        "start": 23,
        "end": 58,
        "expression": {
          "type": "NewExpression",
          "start": 23,
          "end": 31,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 27,
            "end": 29,
            "decorators": [],
            "name": "C1",
            "optional": false
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 35,
          "end": 58,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 41,
            "end": 58,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 42,
                "end": 48
              },
              {
                "type": "TSUnknownKeyword",
                "start": 50,
                "end": 57
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 35,
            "end": 41,
            "decorators": [],
            "name": "Record",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 62,
      "end": 83,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 71,
        "end": 83,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 81,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 76,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 76,
              "end": 81,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 79,
                "end": 81,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 70,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 84,
      "end": 128,
      "body": {
        "type": "TSModuleBlock",
        "start": 97,
        "end": 128,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 99,
            "end": 126,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 106,
              "end": 126,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 112,
                  "end": 125,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 121,
                    "decorators": [],
                    "name": "unrelated",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 124,
                    "end": 125,
                    "raw": "3",
                    "value": 3
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
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 96,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 166,
      "expression": {
        "type": "TSAsExpression",
        "start": 130,
        "end": 165,
        "expression": {
          "type": "NewExpression",
          "start": 130,
          "end": 138,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 134,
            "end": 136,
            "decorators": [],
            "name": "C2",
            "optional": false
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 142,
          "end": 165,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 148,
            "end": 165,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 149,
                "end": 155
              },
              {
                "type": "TSUnknownKeyword",
                "start": 157,
                "end": 164
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 142,
            "end": 148,
            "decorators": [],
            "name": "Record",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 168,
      "end": 180,
      "expression": {
        "type": "MemberExpression",
        "start": 168,
        "end": 180,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 168,
          "end": 170,
          "decorators": [],
          "name": "C2",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 171,
          "end": 180,
          "decorators": [],
          "name": "unrelated",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 181,
      "end": 199,
      "expression": {
        "type": "MemberExpression",
        "start": 181,
        "end": 199,
        "computed": false,
        "object": {
          "type": "NewExpression",
          "start": 181,
          "end": 189,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 185,
            "end": 187,
            "decorators": [],
            "name": "C2",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 190,
          "end": 199,
          "decorators": [],
          "name": "unrelated",
          "optional": false
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 202,
      "end": 246,
      "body": {
        "type": "TSModuleBlock",
        "start": 215,
        "end": 246,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 217,
            "end": 244,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 224,
              "end": 244,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 230,
                  "end": 243,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 230,
                    "end": 239,
                    "decorators": [],
                    "name": "unrelated",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 242,
                    "end": 243,
                    "raw": "3",
                    "value": 3
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
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 214,
        "decorators": [],
        "name": "C3",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "ExpressionStatement",
      "start": 248,
      "end": 278,
      "expression": {
        "type": "TSAsExpression",
        "start": 248,
        "end": 277,
        "expression": {
          "type": "Identifier",
          "start": 248,
          "end": 250,
          "decorators": [],
          "name": "C3",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 254,
          "end": 277,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 260,
            "end": 277,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 261,
                "end": 267
              },
              {
                "type": "TSUnknownKeyword",
                "start": 269,
                "end": 276
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 254,
            "end": 260,
            "decorators": [],
            "name": "Record",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
