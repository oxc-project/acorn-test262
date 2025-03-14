__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 30,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 30,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 14,
            "end": 28,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
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
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
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
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 32,
      "end": 71,
      "body": {
        "type": "TSInterfaceBody",
        "start": 54,
        "end": 71,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 57,
            "end": 69,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 68,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 62,
                "end": 68
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 52,
          "end": 53,
          "expression": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "I",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 64,
  "end": 237,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 64,
      "end": 94,
      "body": {
        "type": "TSInterfaceBody",
        "start": 76,
        "end": 94,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 78,
            "end": 92,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 81,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 91,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 85,
                "end": 91
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
        "start": 74,
        "end": 75,
        "decorators": [],
        "name": "D",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 96,
      "end": 133,
      "body": {
        "type": "TSInterfaceBody",
        "start": 118,
        "end": 133,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 121,
            "end": 131,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 130,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 126,
                "end": 130,
                "typeName": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 130,
                  "decorators": [],
                  "name": "Date",
                  "optional": false
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 116,
          "end": 117,
          "expression": {
            "type": "Identifier",
            "start": 116,
            "end": 117,
            "decorators": [],
            "name": "D",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 107,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 135,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 142,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 142,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 142,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 141,
                "end": 142,
                "typeName": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 142,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
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
      "type": "VariableDeclaration",
      "start": 144,
      "end": 168,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 167,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 157,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 157,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 151,
                "end": 157
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 160,
            "end": 167,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 160,
              "end": 165,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 160,
                "end": 161,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 162,
                "end": 165,
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
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 169,
      "end": 193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 192,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 182,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 182,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 176,
                "end": 182
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 185,
            "end": 192,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 185,
              "end": 190,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 185,
                "end": 186,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 187,
                "end": 190,
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
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 194,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 215,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 207,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 207,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 201,
                "end": 207
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 210,
            "end": 215,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 210,
              "end": 213,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 210,
                "end": 211,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 212,
                "end": 213,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 217,
      "end": 237,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 221,
          "end": 236,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 221,
            "end": 228,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 222,
              "end": 228,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 224,
                "end": 228,
                "typeName": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 228,
                  "decorators": [],
                  "name": "Date",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 231,
            "end": 236,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 231,
              "end": 234,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 231,
                "end": 232,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 233,
                "end": 234,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
