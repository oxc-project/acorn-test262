__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 255,
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
            "accessibility": null,
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
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 22,
                "end": 30,
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 36,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 38,
                    "end": 39,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 39,
                      "decorators": [],
                      "name": "y",
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
      "start": 45,
      "end": 90,
      "body": {
        "type": "TSInterfaceBody",
        "start": 57,
        "end": 90,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 63,
            "end": 88,
            "accessibility": null,
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
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 71,
                "end": 79,
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
              "start": 80,
              "end": 87,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 82,
                "end": 87,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 84,
                    "end": 85,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 85,
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
        "start": 55,
        "end": 56,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 92,
      "end": 122,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 112,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 113,
          "end": 117,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 114,
            "end": 117,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 116,
              "end": 117,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 116,
                "end": 117,
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
        "start": 118,
        "end": 121,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 120,
          "end": 121,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 120,
            "end": 121,
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
      "start": 123,
      "end": 157,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 143,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 144,
          "end": 150,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 145,
            "end": 150,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 147,
              "end": 150
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 151,
        "end": 156,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 153,
          "end": 156
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 159,
      "end": 189,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 179,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 180,
          "end": 184,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 181,
            "end": 184,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 183,
              "end": 184,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 183,
                "end": 184,
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
        "start": 185,
        "end": 188,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 187,
          "end": 188,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 187,
            "end": 188,
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
      "start": 190,
      "end": 224,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 210,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 211,
          "end": 217,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 212,
            "end": 217,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 214,
              "end": 217
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 218,
        "end": 223,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 220,
          "end": 223
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 226,
      "end": 237,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 226,
        "end": 236,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 230,
            "end": 235,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 234,
              "end": 235,
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
          "start": 226,
          "end": 229,
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
      "start": 238,
      "end": 247,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 246,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 246,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 243,
              "end": 246,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 245,
                "end": 246,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 246,
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
      "start": 248,
      "end": 255,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 248,
        "end": 254,
        "arguments": [
          {
            "type": "Identifier",
            "start": 252,
            "end": 253,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 248,
          "end": 251,
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
