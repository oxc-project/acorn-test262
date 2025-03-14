__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 256,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 44,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 44,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 42,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 15,
              "end": 30,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 15,
                "end": 21,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 22,
                "end": 30,
                "decorators": [],
                "name": "iterator",
                "optional": false
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 41,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 33,
                "end": 41,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 35,
                    "end": 37,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 36,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 38,
                    "end": 39,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 39,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 45,
      "end": 91,
      "body": {
        "type": "TSInterfaceBody",
        "start": 57,
        "end": 91,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 63,
            "end": 89,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 64,
              "end": 79,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 64,
                "end": 70,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 71,
                "end": 79,
                "decorators": [],
                "name": "iterator",
                "optional": false
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 88,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 83,
                "end": 88,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 85,
                    "end": 86,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 86,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 56,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 93,
      "end": 123,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 113,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 114,
          "end": 118,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 115,
            "end": 118,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 117,
              "end": 118,
              "typeName": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 119,
        "end": 122,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 121,
          "end": 122,
          "typeName": {
            "type": "Identifier",
            "start": 121,
            "end": 122,
            "decorators": [],
            "name": "I",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 124,
      "end": 158,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 144,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 145,
          "end": 151,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 146,
            "end": 151,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 148,
              "end": 151
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 152,
        "end": 157,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 154,
          "end": 157
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 160,
      "end": 190,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 177,
        "end": 180,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 181,
          "end": 185,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 182,
            "end": 185,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 184,
              "end": 185,
              "typeName": {
                "type": "Identifier",
                "start": 184,
                "end": 185,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 186,
        "end": 189,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 188,
          "end": 189,
          "typeName": {
            "type": "Identifier",
            "start": 188,
            "end": 189,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 191,
      "end": 225,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 208,
        "end": 211,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 212,
          "end": 218,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 213,
            "end": 218,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 215,
              "end": 218
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 219,
        "end": 224,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 221,
          "end": 224
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 227,
      "end": 238,
      "expression": {
        "type": "CallExpression",
        "start": 227,
        "end": 237,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 231,
            "end": 236,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 235,
              "end": 236,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 227,
          "end": 230,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 239,
      "end": 248,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 243,
          "end": 247,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 243,
            "end": 247,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 244,
              "end": 247,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 246,
                "end": 247,
                "typeName": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 247,
                  "decorators": [],
                  "name": "I",
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
      "type": "ExpressionStatement",
      "start": 249,
      "end": 256,
      "expression": {
        "type": "CallExpression",
        "start": 249,
        "end": 255,
        "arguments": [
          {
            "type": "Identifier",
            "start": 253,
            "end": 254,
            "decorators": [],
            "name": "i",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 249,
          "end": 252,
          "decorators": [],
          "name": "bar",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
