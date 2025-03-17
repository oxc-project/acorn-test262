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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 49,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 47,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 23,
              "end": 38,
              "object": {
                "type": "Identifier",
                "start": 23,
                "end": 29,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 30,
                "end": 38,
                "name": "iterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 44,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 50,
      "end": 95,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 61,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 62,
        "end": 95,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 68,
            "end": 93,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "start": 69,
              "end": 84,
              "object": {
                "type": "Identifier",
                "start": 69,
                "end": 75,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 76,
                "end": 84,
                "name": "iterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 97,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 117,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 118,
          "end": 122,
          "name": "i",
          "typeAnnotation": {
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 123,
        "end": 126,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 125,
          "end": 126,
          "typeName": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 128,
      "end": 162,
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 148,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 149,
          "end": 155,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 150,
            "end": 155,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 152,
              "end": 155
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 156,
        "end": 161,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 158,
          "end": 161
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 164,
      "end": 194,
      "id": {
        "type": "Identifier",
        "start": 181,
        "end": 184,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 185,
          "end": 189,
          "name": "i",
          "typeAnnotation": {
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
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 190,
        "end": 193,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 192,
          "end": 193,
          "typeName": {
            "type": "Identifier",
            "start": 192,
            "end": 193,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 195,
      "end": 229,
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 215,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 216,
          "end": 222,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 217,
            "end": 222,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 219,
              "end": 222
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 223,
        "end": 228,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 225,
          "end": 228
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 231,
      "end": 242,
      "expression": {
        "type": "CallExpression",
        "start": 231,
        "end": 241,
        "callee": {
          "type": "Identifier",
          "start": 231,
          "end": 234,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "NewExpression",
            "start": 235,
            "end": 240,
            "callee": {
              "type": "Identifier",
              "start": 239,
              "end": 240,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 247,
            "end": 251,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 248,
              "end": 251,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 250,
                "end": 251,
                "typeName": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 251,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 253,
      "end": 260,
      "expression": {
        "type": "CallExpression",
        "start": 253,
        "end": 259,
        "callee": {
          "type": "Identifier",
          "start": 253,
          "end": 256,
          "name": "bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 257,
            "end": 258,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
