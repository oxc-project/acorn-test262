__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 260,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 49,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 49,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 47,
            "accessibility": "private",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 23,
              "end": 38,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 23,
                "end": 29,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 30,
                "end": 38,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 46,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 41,
                "end": 46,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 43,
                    "end": 44,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 44,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 50,
      "end": 95,
      "body": {
        "type": "TSInterfaceBody",
        "start": 62,
        "end": 95,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 68,
            "end": 93,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 69,
              "end": 84,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 69,
                "end": 75,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 76,
                "end": 84,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 92,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 87,
                "end": 92,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 89,
                    "end": 90,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": null
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
        "start": 60,
        "end": 61,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 97,
      "end": 127,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 117,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 118,
          "end": 122,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 119,
            "end": 122,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 121,
              "end": 122,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 121,
                "end": 122,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 123,
        "end": 126,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 125,
          "end": 126,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 128,
      "end": 162,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 148,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 149,
          "end": 155,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 150,
            "end": 155,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 152,
              "end": 155
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 156,
        "end": 161,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 158,
          "end": 161
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 164,
      "end": 194,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 181,
        "end": 184,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 185,
          "end": 189,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 186,
            "end": 189,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 188,
              "end": 189,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 188,
                "end": 189,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 190,
        "end": 193,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 192,
          "end": 193,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 192,
            "end": 193,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 195,
      "end": 229,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 215,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 216,
          "end": 222,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 217,
            "end": 222,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 219,
              "end": 222
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 223,
        "end": 228,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 225,
          "end": 228
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 231,
      "end": 242,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 231,
        "end": 241,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 235,
            "end": 240,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 239,
              "end": 240,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 231,
          "end": 234,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 243,
      "end": 252,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 247,
          "end": 251,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 247,
            "end": 251,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 248,
              "end": 251,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 250,
                "end": 251,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 251,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 253,
      "end": 260,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 253,
        "end": 259,
        "arguments": [
          {
            "type": "Identifier",
            "start": 257,
            "end": 258,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 253,
          "end": 256,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
