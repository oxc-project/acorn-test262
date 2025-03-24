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
      "end": 90,
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
        "end": 90,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 63,
            "end": 88,
            "computed": true,
            "optional": false,
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 85,
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
      "start": 92,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 112,
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
          "start": 113,
          "end": 117,
          "name": "i",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 114,
            "end": 117,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 116,
              "end": 117,
              "typeName": {
                "type": "Identifier",
                "start": 116,
                "end": 117,
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
        "start": 118,
        "end": 121,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 120,
          "end": 121,
          "typeName": {
            "type": "Identifier",
            "start": 120,
            "end": 121,
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
      "start": 123,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 143,
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
          "start": 144,
          "end": 150,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 145,
            "end": 150,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 147,
              "end": 150
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
        "start": 151,
        "end": 156,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 153,
          "end": 156
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 159,
      "end": 189,
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 179,
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
          "start": 180,
          "end": 184,
          "name": "i",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 181,
            "end": 184,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 183,
              "end": 184,
              "typeName": {
                "type": "Identifier",
                "start": 183,
                "end": 184,
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
        "start": 185,
        "end": 188,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 187,
          "end": 188,
          "typeName": {
            "type": "Identifier",
            "start": 187,
            "end": 188,
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
      "start": 190,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 210,
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
          "start": 211,
          "end": 217,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 212,
            "end": 217,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 214,
              "end": 217
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
        "start": 218,
        "end": 223,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 220,
          "end": 223
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 226,
      "end": 237,
      "expression": {
        "type": "CallExpression",
        "start": 226,
        "end": 236,
        "callee": {
          "type": "Identifier",
          "start": 226,
          "end": 229,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "NewExpression",
            "start": 230,
            "end": 235,
            "callee": {
              "type": "Identifier",
              "start": 234,
              "end": 235,
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
      "start": 238,
      "end": 247,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 246,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 246,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 243,
              "end": 246,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 245,
                "end": 246,
                "typeName": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 246,
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
      "start": 248,
      "end": 255,
      "expression": {
        "type": "CallExpression",
        "start": 248,
        "end": 254,
        "callee": {
          "type": "Identifier",
          "start": 248,
          "end": 251,
          "name": "bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 252,
            "end": 253,
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
