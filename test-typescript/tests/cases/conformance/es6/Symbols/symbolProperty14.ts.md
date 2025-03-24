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
        "end": 44,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 42,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 15,
              "end": 30,
              "object": {
                "type": "Identifier",
                "start": 15,
                "end": 21,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 22,
                "end": 30,
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 36,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 38,
                    "end": 39,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 39,
                      "name": "y",
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
            "accessibility": null
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
      "start": 45,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 56,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": true,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "start": 64,
              "end": 79,
              "object": {
                "type": "Identifier",
                "start": 64,
                "end": 70,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 71,
                "end": 79,
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 86,
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
      "start": 93,
      "end": 123,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 113,
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
          "start": 114,
          "end": 118,
          "name": "i",
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
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 124,
      "end": 158,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 144,
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
          "start": 145,
          "end": 151,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 146,
            "end": 151,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 148,
              "end": 151
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
      "id": {
        "type": "Identifier",
        "start": 177,
        "end": 180,
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
          "start": 181,
          "end": 185,
          "name": "i",
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
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 191,
      "end": 225,
      "id": {
        "type": "Identifier",
        "start": 208,
        "end": 211,
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
          "start": 212,
          "end": 218,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 213,
            "end": 218,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 215,
              "end": 218
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
        "callee": {
          "type": "Identifier",
          "start": 227,
          "end": 230,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "NewExpression",
            "start": 231,
            "end": 236,
            "callee": {
              "type": "Identifier",
              "start": 235,
              "end": 236,
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
      "start": 239,
      "end": 248,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 243,
          "end": 247,
          "id": {
            "type": "Identifier",
            "start": 243,
            "end": 247,
            "name": "i",
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
      "start": 249,
      "end": 256,
      "expression": {
        "type": "CallExpression",
        "start": 249,
        "end": 255,
        "callee": {
          "type": "Identifier",
          "start": 249,
          "end": 252,
          "name": "bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 253,
            "end": 254,
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
